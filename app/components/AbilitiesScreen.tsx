"use client";

import { useState } from "react";
import { d20 } from "../lib/dice";

type Roll = {
  expression: string;
  total: number;
  rolls: number[];
  modifier: number;
};

const abilities = [
  { name: "Strength", modifier: 2 },
  { name: "Dexterity", modifier: 4 },
  { name: "Constitution", modifier: 1 },
  { name: "Intelligence", modifier: 3 },
  { name: "Wisdom", modifier: 6 },
  { name: "Charisma", modifier: 1 },
];

const skills = [
  { name: "Acrobatics", modifier: 4 },
  { name: "Athletics", modifier: 2 },
  { name: "Computer Use", modifier: 5 },
  { name: "Deception", modifier: 1 },
  { name: "Initiative", modifier: 4 },
  { name: "Insight", modifier: 6 },
  { name: "Investigation", modifier: 5 },
  { name: "Lore", modifier: 7 },
  { name: "Medicine", modifier: 3 },
  { name: "Perception", modifier: 6 },
  { name: "Persuasion", modifier: 2 },
  { name: "Piloting", modifier: 5 },
  { name: "Stealth", modifier: 8 },
  { name: "Survival", modifier: 4 },
];

export default function AbilitiesScreen() {
  const [lastRoll, setLastRoll] = useState<Roll | null>(null);
  const [lastName, setLastName] = useState("");

  function performRoll(name: string, modifier: number) {
    setLastName(name);
    setLastRoll(d20(modifier));
  }

  return (
    <section className="abilities">

      <h1>ABILITIES</h1>

      <div className="ability-grid">

        {abilities.map((ability) => (
          <button
            key={ability.name}
            className="roll-button"
            onClick={() =>
              performRoll(ability.name, ability.modifier)
            }
          >
            <span>{ability.name}</span>

            <strong>
              {ability.modifier >= 0 ? "+" : ""}
              {ability.modifier}
            </strong>
          </button>
        ))}

      </div>

      <h1 style={{ marginTop: "3rem" }}>
        SKILLS
      </h1>

      <div className="skill-grid">

        {skills.map((skill) => (
          <button
            key={skill.name}
            className="roll-button"
            onClick={() =>
              performRoll(skill.name, skill.modifier)
            }
          >
            <span>{skill.name}</span>

            <strong>
              {skill.modifier >= 0 ? "+" : ""}
              {skill.modifier}
            </strong>
          </button>
        ))}

      </div>

      {lastRoll && (
        <div className="roll-result">

          <h2>{lastName}</h2>

          <div className="dice-total">
            {lastRoll.rolls[0]}
            {" + "}
            {lastRoll.modifier}
            {" = "}
            {lastRoll.total}
          </div>

        </div>
      )}

    </section>
  );
}