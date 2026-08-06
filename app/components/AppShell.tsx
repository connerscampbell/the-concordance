"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileScreen from "./ProfileScreen";
import AbilitiesScreen from "./AbilitiesScreen";
import CombatScreen from "./CombatScreen";
import PowersScreen from "./PowersScreen";
import FeaturesScreen from "./FeaturesScreen";
import InventoryScreen from "./InventoryScreen";
import { Character } from "../data";

type Screen =
  | "profile"
  | "abilities"
  | "combat"
  | "powers"
  | "features"
  | "inventory"
  | "contacts"
  | "archive"
  | "campaign";

type AppShellProps = {
  user: {
    userName: string;
    character: Character;
  };
};

export default function AppShell({
  user,
}: AppShellProps) {
  const [screen, setScreen] =
    useState<Screen>("profile");

  function renderScreen() {
    switch (screen) {
      case "profile":
        return (
          <ProfileScreen
            character={user.character}
          />
        );

      case "abilities":
        return (
          <AbilitiesScreen
            character={user.character}
          />
        );

      case "combat":
        return (
          <CombatScreen
            character={user.character}
          />
        );

      case "powers":
        return (
          <PowersScreen
            character={user.character}
          />
        );

      case "features":
        return (
          <FeaturesScreen
            character={user.character}
          />
        );

      case "inventory":
        return (
          <InventoryScreen
            character={user.character}
          />
        );

      case "contacts":
        return (
          <Placeholder title="Contacts" />
        );

      case "archive":
        return (
          <Placeholder title="The Concordance" />
        );

      case "campaign":
        return (
          <Placeholder title="Campaign Journal" />
        );

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
            <span>
              GALACTIC DATA CRYSTAL
              INTERFACE
            </span>
          </div>

          <div className="status">
            <p>ACCESS: GRANTED</p>
            <p>STATUS: ONLINE</p>
            <p>
              USER:{" "}
              {user.userName.toUpperCase()}
            </p>
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

function Placeholder({
  title,
}: {
  title: string;
}) {
  return (
    <div className="placeholder">
      <h2>{title}</h2>
      <p>
        This module is coming online...
      </p>
    </div>
  );
}