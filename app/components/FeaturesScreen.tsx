"use client";

import { Character } from "../data";

type Props = {
  character: Character;
};

export default function FeaturesScreen({
  character,
}: Props) {
  const features = character.features ?? {
    class: [],
    species: [],
    background: undefined,
  };

  const proficiencies =
    character.proficiencies ?? {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    };

  return (
    <section className="abilities">
      <h1>FEATURES & PROFICIENCIES</h1>

      <SectionTitle title="CLASS FEATURES" />

      <div className="stats-grid">
        {features.class.length === 0 ? (
          <FeatureCard
            title="None"
            description=""
          />
        ) : (
          features.class.map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              description={
                feature.description
              }
            />
          ))
        )}
      </div>

      <SectionTitle title="SPECIES TRAITS" />

      <div className="stats-grid">
        {features.species.length === 0 ? (
          <FeatureCard
            title="None"
            description=""
          />
        ) : (
          features.species.map(
            (feature) => (
              <FeatureCard
                key={feature.name}
                title={feature.name}
                description={
                  feature.description
                }
              />
            )
          )
        )}
      </div>

      <SectionTitle title="BACKGROUND FEATURE" />

      <div className="stats-grid">
        {features.background ? (
          <FeatureCard
            title={
              features.background.name
            }
            description={
              features.background
                .description
            }
          />
        ) : (
          <FeatureCard
            title="None"
            description=""
          />
        )}
      </div>

      <SectionTitle title="PROFICIENCIES" />

      <div className="stats-grid">
        <ListCard
          title="Weapons"
          items={proficiencies.weapons}
        />

        <ListCard
          title="Armor"
          items={proficiencies.armor}
        />

        <ListCard
          title="Tools"
          items={proficiencies.tools}
        />

        <ListCard
          title="Languages"
          items={proficiencies.languages}
        />
      </div>
    </section>
  );
}

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h2
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      {title}
    </h2>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>

      <p>
        {description ??
          "No description available."}
      </p>
    </div>
  );
}

function ListCard({
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