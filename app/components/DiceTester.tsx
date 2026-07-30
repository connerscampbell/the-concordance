"use client";

import { useState } from "react";
import { d20 } from "../lib/dice";

export default function DiceTester() {
  const [result, setResult] = useState<any>();

  return (
    <div
      style={{
        marginTop: "2rem",
        borderTop: "1px solid #555",
        paddingTop: "2rem",
      }}
    >
      <button
        onClick={() => setResult(d20(6))}
      >
        Roll Perception (+6)
      </button>

      {result && (
        <pre style={{ marginTop: "1rem" }}>
{JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}