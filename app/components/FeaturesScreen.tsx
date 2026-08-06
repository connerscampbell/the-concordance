"use client";

import { Character } from "../data";

type Props = {
  character: Character;
};

export default function FeaturesScreen({
  character,
}: Props) {
  return (
    <section className="abilities">
      <h1>FEATURES & PROFICIENCIES</h1>

      <div className="stats-grid">
        <FeatureCard
          title="CLASS FEATURES"
          items={character.features.class.map(
            (feature) => feature.name
          )}
        />

        <FeatureCard
          title="SPECIES TRAITS"
          items={character.features.species.map(
            (feature) => feature.name
          )}
        />

        <FeatureCard
          title="BACKGROUND FEATURE"
          items={
            character.features.background
              ? [
                  character.features.background
                    .name,
                ]
              : []
          }
        />

        <FeatureCard
          title="WEAPON PROFICIENCIES"
          items={
            character.proficiencies.weapons
          }
        />

        <FeatureCard
          title="ARMOR PROFICIENCIES"
          items={
            character.proficiencies.armor
          }
        />

        <FeatureCard
          title="TOOL PROFICIENCIES"
          items={
            character.proficiencies.tools
          }
        />

        <FeatureCard
          title="LANGUAGES"
          items={
            character.proficiencies.languages
          }
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>

      {items.length === 0 ? (
        <p>None</p>
      ) : (
        <ul
          style={{
            marginTop: ".75rem",
            paddingLeft: "1rem",
            lineHeight: 1.7,
          }}
        >
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}