"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProfileScreen from "./ProfileScreen";
import AbilitiesScreen from "./AbilitiesScreen";
import CombatScreen from "./CombatScreen";
import PowersScreen from "./PowersScreen";
import FeaturesScreen from "./FeaturesScreen";
import InventoryScreen from "./InventoryScreen";
import { Character } from "../data";
import { load, save } from "../lib/storage";

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
  const storageKey = `character-${user.userName}`;

  const [screen, setScreen] =
    useState<Screen>("profile");

  const [character, setCharacter] =
    useState<Character>(() =>
      load(
        storageKey,
        structuredClone(user.character)
      )
    );

  useEffect(() => {
    save(storageKey, character);
  }, [storageKey, character]);

  function renderScreen() {
    switch (screen) {
      case "profile":
        return (
          <ProfileScreen
            character={character}
          />
        );

      case "abilities":
        return (
          <AbilitiesScreen
            character={character}
          />
        );

      case "combat":
        return (
          <CombatScreen
            character={character}
            setCharacter={setCharacter}
          />
        );

      case "powers":
        return (
          <PowersScreen
            character={character}
          />
        );

      case "features":
        return (
          <FeaturesScreen
            character={character}
          />
        );

      case "inventory":
        return (
          <InventoryScreen
            character={character}
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