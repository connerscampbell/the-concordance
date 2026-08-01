"use client";

import { useState } from "react";
import { Character } from "../data";
import {
  abilityCheck,
  savingThrow,
  RollResult,
} from "../lib/dice";

type Ability = {
  name: string;
  score: number;
  modifier: number;
  save: number;
};

type Skill = {
  name: string;
  modifier: number;
};

type Props = {
  character: Character;
};

export default function AbilitiesScreen({
  character,
}: Props) {
  const abilities: Ability[] = [
    {
      name: "Strength",
      ...character.abilities.strength,
    },
    {
      name: "Dexterity",
      ...character.abilities.dexterity,
    },
    {
      name: "Constitution",
      ...character.abilities.constitution,
    },
    {
      name: "Intelligence",
      ...character.abilities.intelligence,
    },
    {
      name: "Wisdom",
      ...character.abilities.wisdom,
    },
    {
      name: "Charisma",
      ...character.abilities.charisma,
    },
  ];

  const skills: Skill[] = [
    {
      name: "Acrobatics",
      modifier: character.skills.acrobatics,
    },
    {
      name: "Animal Handling",
      modifier: character.skills.animalHandling,
    },
    {
      name: "Athletics",
      modifier: character.skills.athletics,
    },
    {
      name: "Deception",
      modifier: character.skills.deception,
    },
    {
      name: "Insight",
      modifier: character.skills.insight,
    },
    {
      name: "Intimidation",
      modifier: character.skills.intimidation,
    },
    {
      name: "Investigation",
      modifier: character.skills.investigation,
    },
    {
      name: "Lore",
      modifier: character.skills.lore,
    },
    {
      name: "Medicine",
      modifier: character.skills.medicine,
    },
    {
      name: "Nature",
      modifier: character.skills.nature,
    },
    {
      name: "Performance",
      modifier: character.skills.performance,
    },
    {
      name: "Perception",
      modifier: character.skills.perception,
    },
    {
      name: "Persuasion",
      modifier: character.skills.persuasion,
    },
    {
      name: "Piloting",
      modifier: character.skills.piloting,
    },
    {
      name: "Sleight of Hand",
      modifier: character.skills.sleightOfHand,
    },
    {
      name: "Stealth",
      modifier: character.skills.stealth,
    },
    {
      name: "Survival",
      modifier: character.skills.survival,
    },
    {
      name: "Technology",
      modifier: character.skills.technology,
    },
  ];

  const [result, setResult] =
    useState<RollResult | null>(null);

  const [title, setTitle] = useState("");

  function doAbilityRoll(
    name: string,
    modifier: number
  ) {
    setTitle(name);
    setResult(abilityCheck(modifier));
  }

  function doSave(
    name: string,
    modifier: number
  ) {
    setTitle(`${name} Save`);
    setResult(savingThrow(modifier));
  }

  function doSkill(
    name: string,
    modifier: number
  ) {
    setTitle(name);
    setResult(abilityCheck(modifier));
  }

  return (
    <section className="abilities">
      <h1>ABILITIES</h1>

      {result && (
        <div className="combat-result">
          <h2>{title}</h2>

          <p>Rolls: {result.rolls.join(", ")}</p>

          <p>
            Modifier{" "}
            {result.modifier >= 0 ? "+" : ""}
            {result.modifier}
          </p>

          <h1>Total: {result.total}</h1>
        </div>
      )}

      <div className="ability-grid">
        {abilities.map((ability) => (
          <div
            key={ability.name}
            className="stat-card"
          >
            <h3>{ability.name}</h3>

            <p>Score: {ability.score}</p>

            <p>
              Modifier{" "}
              {ability.modifier >= 0 ? "+" : ""}
              {ability.modifier}
            </p>

            <p>
              Save{" "}
              {ability.save >= 0 ? "+" : ""}
              {ability.save}
            </p>

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
                  doAbilityRoll(
                    ability.name,
                    ability.modifier
                  )
                }
              >
                Check
              </button>

              <button
                className="roll-button"
                onClick={() =>
                  doSave(
                    ability.name,
                    ability.save
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: "2rem" }}>
        SKILLS
      </h1>

      <div className="skill-grid">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className="roll-button"
            onClick={() =>
              doSkill(
                skill.name,
                skill.modifier
              )
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
    </section>
  );
}