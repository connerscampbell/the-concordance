"use client";

import { Dispatch, SetStateAction, useState } from "react";
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
  setCharacter: Dispatch<
    SetStateAction<Character>
  >;
};

export default function CombatScreen({
  character,
  setCharacter,
}: CombatScreenProps) {
  const [result, setResult] =
    useState<RollResult | null>(null);

  const [title, setTitle] = useState("");

  function showResult(
    name: string,
    roll: RollResult
  ) {
    setTitle(name);
    setResult(roll);
  }

  function changeHP(amount: number) {
    setCharacter((prev) => ({
      ...prev,
      combat: {
        ...prev.combat,
        hp: {
          ...prev.combat.hp,
          current: Math.max(
            0,
            Math.min(
              prev.combat.hp.max,
              prev.combat.hp.current +
                amount
            )
          ),
        },
      },
    }));
  }

  function changeTempHP(amount: number) {
    setCharacter((prev) => ({
      ...prev,
      combat: {
        ...prev.combat,
        hp: {
          ...prev.combat.hp,
          temporary: Math.max(
            0,
            prev.combat.hp.temporary +
              amount
          ),
        },
      },
    }));
  }

  function fullHeal() {
    setCharacter((prev) => ({
      ...prev,
      combat: {
        ...prev.combat,
        hp: {
          ...prev.combat.hp,
          current: prev.combat.hp.max,
          temporary: 0,
        },
      },
    }));
  }

  return (
    <section className="combat-screen">
      <h1>COMBAT</h1>

      <div className="combat-card">
        <h2>COMBAT STATUS</h2>

        <div className="hp-display">
          {character.combat.hp.current} /{" "}
          {character.combat.hp.max}
        </div>

        <p>
          Temporary HP:{" "}
          {
            character.combat.hp
              .temporary
          }
        </p>

        <p>
          Armor Class:{" "}
          {
            character.combat
              .armorClass
          }
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
            Initiative: +
            {
              character.combat
                .initiative
            }
          </span>

          <button
            className="roll-button"
            onClick={() =>
              showResult(
                "Initiative",
                initiative(
                  character.combat
                    .initiative
                )
              )
            }
          >
            Roll Initiative
          </button>
        </div>

        {character.combat.hp
          .hitDice && (
          <p>
            Hit Dice:{" "}
            {
              character.combat.hp
                .hitDice.current
            }
            /
            {
              character.combat.hp
                .hitDice.max
            }{" "}
            (
            {
              character.combat.hp
                .hitDice.die
            }
            )
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
          {[-10, -5, -1, 1, 5, 10].map(
            (amount) => (
              <button
                key={amount}
                className="roll-button"
                onClick={() =>
                  changeHP(amount)
                }
              >
                {amount > 0
                  ? `+${amount}`
                  : amount}
              </button>
            )
          )}

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
              changeTempHP(-1)
            }
          >
            Temp -1
          </button>

          <button
            className="roll-button"
            onClick={() =>
              changeTempHP(1)
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

          <h1>
            Total: {result.total}
          </h1>
        </div>
      )}

      <div className="combat-card">
        <h2>CONDITIONS</h2>

        {character.combat.conditions
          .length === 0 ? (
          <p>None</p>
        ) : (
          <ul>
            {character.combat.conditions.map(
              (condition) => (
                <li
                  key={condition}
                >
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
              damageDice={
                weapon.damage
              }
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
                      ? Number(
                          match[3]
                        )
                      : 0
                  )
                );
              }}
            />
          )
        )}
      </div>

      <div className="combat-card">
        <h2>QUICK ROLL</h2>

        <button
          className="roll-button"
          onClick={() =>
            showResult(
              "Manual d20",
              d20()
            )
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
        Attack Bonus: +
        {attackBonus}
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