"use client";

import { useState } from "react";
import { Character } from "../data";
import ManualDiceRoller from "./ManualDiceRoller";
import {
  attack,
  damage,
  initiative,
  d20,
  RollResult,
} from "../lib/dice";

type CombatScreenProps = {
  character: Character;
};

export default function CombatScreen({
  character,
}: CombatScreenProps) {
  const [result, setResult] =
    useState<RollResult | null>(null);

  const [title, setTitle] = useState("");

  const [currentHP, setCurrentHP] = useState(
    character.combat.hp.current
  );

  const [tempHP, setTempHP] = useState(
    character.combat.hp.temporary
  );

  function showResult(
    name: string,
    roll: RollResult
  ) {
    setTitle(name);
    setResult(roll);
  }

  function changeHP(amount: number) {
    setCurrentHP((hp) =>
      Math.max(
        0,
        Math.min(
          character.combat.hp.max,
          hp + amount
        )
      )
    );
  }

  function fullHeal() {
    setCurrentHP(character.combat.hp.max);
    setTempHP(0);
  }

  return (
    <section className="combat-screen">
      <h1>COMBAT</h1>

      <div className="combat-card">
        <h2>COMBAT STATUS</h2>

        <div className="hp-display">
          {currentHP} / {character.combat.hp.max}
        </div>

        <p>Temporary HP: {tempHP}</p>

        <p>
          Armor Class: {character.combat.armorClass}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".75rem",
            margin: ".75rem 0",
          }}
        >
          <span>
            Initiative: +{character.combat.initiative}
          </span>

          <button
            className="roll-button"
            onClick={() =>
              showResult(
                "Initiative",
                initiative(
                  character.combat.initiative
                )
              )
            }
          >
            Roll Initiative
          </button>
        </div>

        {character.combat.hp.hitDice && (
          <p>
            Hit Dice:{" "}
            {character.combat.hp.hitDice.current}/
            {character.combat.hp.hitDice.max} (
            {character.combat.hp.hitDice.die})
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
            marginTop: "1rem",
          }}
        >
          <button
            className="roll-button"
            onClick={() => changeHP(-10)}
          >
            -10
          </button>

          <button
            className="roll-button"
            onClick={() => changeHP(-5)}
          >
            -5
          </button>

          <button
            className="roll-button"
            onClick={() => changeHP(-1)}
          >
            -1
          </button>

          <button
            className="roll-button"
            onClick={() => changeHP(1)}
          >
            +1
          </button>

          <button
            className="roll-button"
            onClick={() => changeHP(5)}
          >
            +5
          </button>

          <button
            className="roll-button"
            onClick={() => changeHP(10)}
          >
            +10
          </button>

          <button
            className="roll-button"
            onClick={fullHeal}
          >
            Full Heal
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: ".5rem",
            marginTop: "1rem",
          }}
        >
          <button
            className="roll-button"
            onClick={() =>
              setTempHP((hp) =>
                Math.max(0, hp - 1)
              )
            }
          >
            Temp -1
          </button>

          <button
            className="roll-button"
            onClick={() =>
              setTempHP((hp) => hp + 1)
            }
          >
            Temp +1
          </button>
        </div>
      </div>

      {result && (
        <div className="combat-result">
          <h2>{title}</h2>

          <p>
            Rolls:{" "}
            {result.rolls.join(", ")}
          </p>

          <p>
            Modifier:{" "}
            {result.modifier >= 0
              ? "+"
              : ""}
            {result.modifier}
          </p>

          <h1>Total: {result.total}</h1>
        </div>
      )}

      <div className="combat-card">
        <h2>CONDITIONS</h2>

        {character.combat.conditions.length ===
        0 ? (
          <p>None</p>
        ) : (
          <ul>
            {character.combat.conditions.map(
              (condition) => (
                <li key={condition}>
                  {condition}
                </li>
              )
            )}
          </ul>
        )}
      </div>

      <div className="combat-card">
        <h2>WEAPONS</h2>

        {character.combat.weapons.map(
          (weapon) => (
            <Weapon
              key={weapon.name}
              name={weapon.name}
              attackBonus={
                weapon.attackBonus
              }
              damageDice={weapon.damage}
              notes={weapon.notes}
              onAttack={() =>
                showResult(
                  `${weapon.name} Attack`,
                  attack(
                    weapon.attackBonus
                  )
                )
              }
              onDamage={() => {
                const match =
                  weapon.damage.match(
                    /(\d+)d(\d+)([+-]\d+)?/
                  );

                if (!match) return;

                showResult(
                  `${weapon.name} Damage`,
                  damage(
                    Number(match[1]),
                    Number(match[2]),
                    match[3]
                      ? Number(match[3])
                      : 0
                  )
                );
              }}
            />
          )
        )}
      </div>

      <div className="combat-card">
        <h2>
          {character.combat.powers.type.toUpperCase()}{" "}
          POWERS
        </h2>

        <ul>
          {character.combat.powers.known.map(
            (power) => (
              <li key={power.name}>
                {power.name}
              </li>
            )
          )}
        </ul>

        {character.combat.powers.points && (
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            {character.combat.powers.type}{" "}
            Points:{" "}
            {
              character.combat.powers.points
                .current
            }
            /
            {
              character.combat.powers.points
                .max
            }
          </p>
        )}
      </div>

      <div className="combat-card">
        <h2>QUICK ROLL</h2>

        <button
          className="roll-button"
          onClick={() =>
            showResult("Manual d20", d20())
          }
        >
          Roll d20
        </button>
      </div>

      <ManualDiceRoller />
    </section>
  );
}

type WeaponProps = {
  name: string;
  attackBonus: number;
  damageDice: string;
  notes: string;
  onAttack: () => void;
  onDamage: () => void;
};

function Weapon({
  name,
  attackBonus,
  damageDice,
  notes,
  onAttack,
  onDamage,
}: WeaponProps) {
  return (
    <div className="weapon-card">
      <h3>{name}</h3>

      <p>
        Attack Bonus: +{attackBonus}
      </p>

      <p>Damage: {damageDice}</p>

      <p>{notes}</p>

      <div className="weapon-buttons">
        <button onClick={onAttack}>
          Attack
        </button>

        <button onClick={onDamage}>
          Damage
        </button>
      </div>
    </div>
  );
}