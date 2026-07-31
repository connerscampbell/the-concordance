"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileScreen from "./ProfileScreen";
import AbilitiesScreen from "./AbilitiesScreen";
import CombatScreen from "./CombatScreen";

type Screen =
  | "profile"
  | "abilities"
  | "combat"
  | "inventory"
  | "contacts"
  | "archive"
  | "campaign";

type AppShellProps = {
  user: {
    userName: string;
    character: {
      fullName: string;
      species: string;
      class?: string;
      background?: string;
      alignment?: string;
      hp?: {
        current: number;
        max: number;
      };
      credits?: number;
      biography?: string;
      portrait?: string;
    };
  };
};

export default function AppShell({ user }: AppShellProps) {
  const [screen, setScreen] = useState<Screen>("profile");

  function renderScreen() {
    switch (screen) {
      case "profile":
        return <ProfileScreen character={user.character} />;

      case "abilities":
        return <AbilitiesScreen />;

      case "combat":
        return <CombatScreen />;

      case "inventory":
        return <Placeholder title="Inventory" />;

      case "contacts":
        return <Placeholder title="Contacts" />;

      case "archive":
        return <Placeholder title="The Concordance" />;

      case "campaign":
        return <Placeholder title="Campaign Journal" />;

      default:
        return null;
    }
  }

  return (
    <main className="datapad">
      <div className="panel">
        <header className="header">
          <div>
            <h1>THE CONCORDANCE</h1>
            <span>GALACTIC DATA CRYSTAL INTERFACE</span>
          </div>

          <div className="status">
            <p>ACCESS: GRANTED</p>
            <p>STATUS: ONLINE</p>
            <p>USER: {user.userName.toUpperCase()}</p>
          </div>
        </header>

        <div className="interface">
          <Sidebar
            active={screen}
            onChange={setScreen}
          />

          <section className="screen">
            {renderScreen()}
          </section>
        </div>
      </div>
    </main>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="placeholder">
      <h2>{title}</h2>
      <p>This module is coming online...</p>
    </div>
  );
}