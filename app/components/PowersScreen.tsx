"use client";

import { useState } from "react";
import { Character } from "../data";

type Props = {
  character: Character;
};

export default function PowersScreen({
  character,
}: Props) {
  const { powers } = character.combat;

  const [selectedPower, setSelectedPower] =
    useState(
      powers.known.length > 0
        ? powers.known[0]
        : null
    );

  return (
    <section className="abilities">
      <h1>
        {powers.type.toUpperCase()} POWERS
      </h1>

      {powers.points && (
        <div className="combat-card">
          <h2>{powers.type} Points</h2>

          <p>
            {powers.points.current} /{" "}
            {powers.points.max}
          </p>
        </div>
      )}

      {powers.known.length === 0 ? (
        <div className="combat-card">
          <p>No powers known.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "280px 1fr",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div className="combat-card">
            <h2>KNOWN POWERS</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                maxHeight: "600px",
                overflowY: "auto",
              }}
            >
              {powers.known.map((power) => (
                <button
                  key={power.name}
                  className="roll-button"
                  onClick={() =>
                    setSelectedPower(power)
                  }
                  style={{
                    justifyContent:
                      "space-between",
                    border:
                      selectedPower?.name ===
                      power.name
                        ? "1px solid #70d6ff"
                        : undefined,
                  }}
                >
                  <span>{power.name}</span>

                  <span
                    style={{
                      color: "#7fdfff",
                      fontSize: ".8rem",
                    }}
                  >
                    {power.level ??
                      "Unknown"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="combat-card">
            {selectedPower && (
              <>
                <h2>
                  {selectedPower.name}
                </h2>

                <table
                  style={{
                    width: "100%",
                    borderSpacing:
                      "0 .5rem",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          Level
                        </strong>
                      </td>

                      <td>
                        {selectedPower.level ??
                          "—"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          School
                        </strong>
                      </td>

                      <td>
                        {selectedPower.school ??
                          "—"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          Casting Time
                        </strong>
                      </td>

                      <td>
                        {selectedPower.castingTime ??
                          "—"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          Range
                        </strong>
                      </td>

                      <td>
                        {selectedPower.range ??
                          "—"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          Duration
                        </strong>
                      </td>

                      <td>
                        {selectedPower.duration ??
                          "—"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          Concentration
                        </strong>
                      </td>

                      <td>
                        {selectedPower.concentration
                          ? "Yes"
                          : "No"}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr
                  style={{
                    margin:
                      "1.5rem 0",
                    borderColor:
                      "#435862",
                  }}
                />

                <h3>Description</h3>

                <p
                  style={{
                    lineHeight: 1.8,
                    whiteSpace:
                      "pre-wrap",
                  }}
                >
                  {selectedPower.description ??
                    "No description has been added yet."}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}