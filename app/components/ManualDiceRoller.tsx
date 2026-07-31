"use client";

import { useState } from "react";
import { rollDice, RollResult } from "../lib/dice";

type Props = {
  title?: string;
};

export default function ManualDiceRoller({
  title = "MANUAL DICE ROLLER",
}: Props) {
  const [diceCount, setDiceCount] = useState(1);
  const [diceSides, setDiceSides] = useState(20);
  const [modifier, setModifier] = useState(0);

  const [history, setHistory] = useState<RollResult[]>([]);

  function performRoll() {
    const result = rollDice(
      diceCount,
      diceSides,
      modifier
    );

    setHistory((prev) => [result, ...prev].slice(0, 10));
  }

  return (
    <section className="manual-dice">

      <h2>{title}</h2>

      <div className="dice-controls">

        <label>
          Dice
          <select
            value={diceSides}
            onChange={(e) =>
              setDiceSides(Number(e.target.value))
            }
          >
            <option value={4}>d4</option>
            <option value={6}>d6</option>
            <option value={8}>d8</option>
            <option value={10}>d10</option>
            <option value={12}>d12</option>
            <option value={20}>d20</option>
            <option value={100}>d100</option>
          </select>
        </label>

        <label>
          Quantity
          <input
            type="number"
            min={1}
            max={20}
            value={diceCount}
            onChange={(e) =>
              setDiceCount(Number(e.target.value))
            }
          />
        </label>

        <label>
          Modifier
          <input
            type="number"
            value={modifier}
            onChange={(e) =>
              setModifier(Number(e.target.value))
            }
          />
        </label>

      </div>

      <button
        className="roll-button"
        onClick={performRoll}
      >
        ROLL
      </button>

      {history.length > 0 && (

        <div className="roll-history">

          <h3>ROLL HISTORY</h3>

          {history.map((roll, index) => (

            <div
              key={index}
              className="history-card"
            >

              <strong>{roll.expression}</strong>

              <div>
                Rolls: {roll.rolls.join(", ")}
              </div>

              <div>
                Modifier: {roll.modifier >= 0 ? "+" : ""}
                {roll.modifier}
              </div>

              <h2>Total: {roll.total}</h2>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}