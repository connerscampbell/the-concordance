"use client";

import { useState } from "react";
import ManualDiceRoller from "./ManualDiceRoller";
import { attack, damage, d20, RollResult } from "../lib/dice";

export default function CombatScreen() {
  const [result, setResult] = useState<RollResult | null>(null);
  const [title, setTitle] = useState("");

  function showResult(name: string, roll: RollResult) {
    setTitle(name);
    setResult(roll);
  }

  return (
    <section className="combat-screen">

      <h1>COMBAT</h1>

      <div className="combat-card">
        <h2>HEALTH</h2>

        <div className="hp-display">
          24 / 24 HP
        </div>

        <p>Temporary HP: 0</p>
      </div>

      <div className="combat-card">
        <h2>CONDITIONS</h2>

        <p>None</p>
      </div>

      <div className="combat-card">
        <h2>WEAPONS</h2>

        <Weapon
          name="Sniper Rifle"
          attackBonus={8}
          damageDice="2d8+4"
          onAttack={() =>
            showResult(
              "Sniper Rifle Attack",
              attack(8)
            )
          }
          onDamage={() =>
            showResult(
              "Sniper Rifle Damage",
              damage(2, 8, 4)
            )
          }
        />

        <Weapon
          name="Lightbaton"
          attackBonus={6}
          damageDice="1d6+4"
          onAttack={() =>
            showResult(
              "Lightbaton Attack",
              attack(6)
            )
          }
          onDamage={() =>
            showResult(
              "Lightbaton Damage",
              damage(1, 6, 4)
            )
          }
        />

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

      {result && (

        <div className="combat-result">

          <h2>{title}</h2>

          <p>
            Rolls: {result.rolls.join(", ")}
          </p>

          <p>
            Modifier:
            {" "}
            {result.modifier >= 0 ? "+" : ""}
            {result.modifier}
          </p>

          <h1>Total: {result.total}</h1>

        </div>

      )}

      <ManualDiceRoller />

    </section>
  );
}

type WeaponProps = {
  name: string;
  attackBonus: number;
  damageDice: string;
  onAttack: () => void;
  onDamage: () => void;
};

function Weapon({
  name,
  attackBonus,
  damageDice,
  onAttack,
  onDamage,
}: WeaponProps) {
  return (
    <div className="weapon-card">

      <h3>{name}</h3>

      <p>Attack Bonus: +{attackBonus}</p>

      <p>Damage: {damageDice}</p>

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