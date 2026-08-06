"use client";

import { Character } from "../data";

type Props = {
  character: Character;
};

export default function PowersScreen({
  character,
}: Props) {
  const { powers } = character.combat;

  return (
    <section className="abilities">
      <h1>{powers.type.toUpperCase()} POWERS</h1>

      {powers.points && (
        <div className="combat-card">
          <h2>
            {powers.type} Points
          </h2>

          <p>
            {powers.points.current} /{" "}
            {powers.points.max}
          </p>
        </div>
      )}

      <div className="stats-grid">
        {powers.known.length === 0 ? (
          <div className="stat-card">
            <p>No powers known.</p>
          </div>
        ) : (
          powers.known.map((power) => (
            <div
              key={power.name}
              className="stat-card"
            >
              <h3>{power.name}</h3>

              {power.description && (
                <p>{power.description}</p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}