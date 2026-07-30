"use client";

import { useState } from "react";
import { characters } from "../data/characters";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function connectUser() {
    const user = characters.find(
      (character) =>
        character.userName.toLowerCase() === username.toLowerCase()
    );

    if (user) {
      setMessage(
        `MATCH FOUND: ${user.character.fullName} (${user.character.species})`
      );
    } else {
      setMessage("NO USER RECORD FOUND");
    }
  }

  return (
    <main className="datapad login-screen">
      <div className="panel login-panel">
        <h1>THE CONCORDANCE</h1>

        <p className="subtitle">
          GALACTIC DATA CRYSTAL SYSTEM
        </p>

        <div className="boot-text">
          <p>&gt; INITIALIZING SYSTEM...</p>
          <p>&gt; VERIFYING CONNECTION...</p>
          <p>&gt; USER IDENTIFICATION REQUIRED</p>
        </div>

        <div className="login-box">
          <label>
            USER IDENTIFICATION:
          </label>

          <input
            type="text"
            placeholder="ENTER FIRST NAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button onClick={connectUser}>
            CONNECT
          </button>

          <p>
            {message}
          </p>
        </div>
      </div>
    </main>
  );
}