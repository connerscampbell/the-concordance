type ProfileProps = {
  character: {
    fullName: string;
    species: string;
  };
};

export default function ProfileScreen({
  character,
}: ProfileProps) {
  return (
    <section className="profile-panel">
      <h2>PERSONNEL FILE</h2>

      <p>NAME:</p>
      <h1>{character.fullName}</h1>

      <p>SPECIES:</p>
      <h2>{character.species}</h2>

      <hr />

      <p>STATUS:</p>
      <h2>ACTIVE</h2>

      <p>CLASS:</p>
      <h2>UNKNOWN</h2>
    </section>
  );
}