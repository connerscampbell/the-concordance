"use client";

import { Character } from "../data";

type Props = {
  character: Character;
};

export default function InventoryScreen({
  character,
}: Props) {
  return (
    <section className="inventory">
      <h1>INVENTORY</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            CREDITS
          </div>

          <div className="stat-value">
            {character.profile.credits.toLocaleString()} cr
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            TOTAL ITEMS
          </div>

          <div className="stat-value">
            {character.inventory.length}
          </div>
        </div>
      </div>

      <div className="combat-card">
        <h2>EQUIPMENT</h2>

        {character.inventory.length === 0 ? (
          <p>No items recorded.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            {character.inventory.map((item) => (
              <div
                key={item.name}
                className="weapon-card"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>{item.name}</h3>

                  <strong>
                    × {item.quantity}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}