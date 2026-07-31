

type Character = {
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

type ProfileProps = {
  character: Character;
};

export default function ProfileScreen({ character }: ProfileProps) {
  return (
    <section className="profile">
      <div className="profile-header">
        <div className="portrait">
          <span>IMAGE</span>
        </div>

        <div className="identity">
          <div className="label">PERSONNEL FILE</div>

          <h1>{character.fullName}</h1>

          <h2>{character.species}</h2>

          <p className="status">
            STATUS:
            <span> ACTIVE</span>
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <Stat
          label="CLASS"
          value={character.class ?? "Unknown"}
        />

        <Stat
          label="BACKGROUND"
          value={character.background ?? "Unknown"}
        />

        <Stat
          label="ALIGNMENT"
          value={character.alignment ?? "Unknown"}
        />

        <Stat
          label="HEALTH"
          value={
            character.hp
              ? `${character.hp.current} / ${character.hp.max}`
              : "Unknown"
          }
        />

        <Stat
          label="CREDITS"
          value={
            character.credits?.toLocaleString() ?? "0"
          }
        />
      </div>

      <div className="bio">
        <div className="section-title">
          BIOGRAPHICAL RECORD
        </div>

        <p>
          {character.biography ??
            "No record has been entered into the Concordance."}
        </p>
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
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}