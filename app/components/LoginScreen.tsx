"use client";

import { useState } from "react";
import { users } from "../data/users";
import AppShell from "./AppShell";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [error, setError] = useState("");

  function handleLogin() {
    const user = users.find(
      (user) =>
        user.userName.toLowerCase() ===
        name.trim().toLowerCase()
    );

    if (!user) {
      setError("Access Denied");
      return;
    }

    setLoggedInUser(user);
    setError("");
  }

  if (loggedInUser) {
    return <AppShell user={loggedInUser} />;
  }

  return (
    <main className="login-screen">
      <div className="login-panel">
        <h1>THE CONCORDANCE</h1>

        <p>GALACTIC DATA CRYSTAL INTERFACE</p>

        <input
          type="text"
          placeholder="Enter First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />

        <button onClick={handleLogin}>
          ACCESS DATABASE
        </button>

        {error && (
          <p className="error">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}