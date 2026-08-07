"use client";

import Image from "next/image";
import { Character } from "../data";

type Props = {
  character: Character;
};

export default function ProfileScreen({
  character,
}: Props) {
  return (
    <section className="profile">
      <div className="profile-header">
        <div className="portrait">
          {character.profile.portrait ? (
            <Image
              src={character.profile.portrait}
              alt={character.profile.name}
              width={180}
              height={220}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <span>IMAGE</span>
          )}
        </div>

        <div className="identity">
          <div className="label">
            PERSONNEL FILE
          </div>

          <h1>{character.profile.name}</h1>

          <h2>{character.profile.species}</h2>

          <p className="status">
            STATUS:
            <span> ACTIVE</span>
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <Stat
          label="CLASS"
          value={character.profile.class}
        />

        <Stat
          label="ARCHETYPE"
          value={character.profile.archetype}
        />

        <Stat
          label="LEVEL"
          value={character.profile.level.toString()}
        />

        <Stat
          label="BACKGROUND"
          value={character.profile.background}
        />

        <Stat
          label="ALIGNMENT"
          value={character.profile.alignment}
        />

        <Stat
          label="HEALTH"
          value={`${character.combat.hp.current} / ${character.combat.hp.max}`}
        />

        <Stat
          label="CREDITS"
          value={`${character.profile.credits.toLocaleString()} cr`}
        />

        <Stat
          label="SPEED"
          value={`${character.profile.speed} ft`}
        />

        <Stat
          label="PASSIVE PERCEPTION"
          value={character.profile.passivePerception.toString()}
        />

        <Stat
          label="PROFICIENCY"
          value={`+${character.profile.proficiencyBonus}`}
        />
      </div>

      <div className="bio">
        <div className="section-title">
          PHYSICAL DESCRIPTION
        </div>

        <div className="stats-grid">
          <Stat
            label="AGE"
            value={
              character.physical?.age?.toString() ??
              "Unknown"
            }
          />

          <Stat
            label="HEIGHT"
            value={
              character.physical?.height ??
              "Unknown"
            }
          />

          <Stat
            label="WEIGHT"
            value={
              character.physical?.weight ??
              "Unknown"
            }
          />

          <Stat
            label="GENDER"
            value={
              character.physical?.gender ??
              "Unknown"
            }
          />

          <Stat
            label="EYES"
            value={
              character.physical?.eyes ??
              "Unknown"
            }
          />

          <Stat
            label="HAIR"
            value={
              character.physical?.hair ??
              "Unknown"
            }
          />

          <Stat
            label="SKIN"
            value={
              character.physical?.skin ??
              "Unknown"
            }
          />

          <Stat
            label="BIRTHPLACE"
            value={
              character.physical
                ?.birthplace ??
              "Unknown"
            }
          />
        </div>
      </div>

      <div className="bio">
        <div className="section-title">
          BIOGRAPHICAL RECORD
        </div>

        <p>{character.biography}</p>
      </div>

      <div className="bio">
        <div className="section-title">
          PSYCHOLOGICAL PROFILE
        </div>

        <div className="stats-grid">
          <Stat
            label="TRAITS"
            value={
              character.personality
                ?.traits ?? "—"
            }
          />

          <Stat
            label="IDEALS"
            value={
              character.personality
                ?.ideals ?? "—"
            }
          />

          <Stat
            label="BONDS"
            value={
              character.personality
                ?.bonds ?? "—"
            }
          />

          <Stat
            label="FLAWS"
            value={
              character.personality
                ?.flaws ?? "—"
            }
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-label">
        {label}
      </div>

      <div className="stat-value">
        {value}
      </div>
    </div>
  );
}