export default function Home() {
  return (
    <main className="datapad">
      <div className="panel">
        <h1>THE CONCORDANCE</h1>

        <p>
          Galactic Data Crystal Interface
        </p>

        <hr />

        <div className="layout">
          <nav>
            <button>Profile</button>
            <button>Abilities</button>
            <button>Combat</button>
            <button>Inventory</button>
            <button>Contacts</button>
            <button>Campaign</button>
          </nav>

          <section>
            <h2>SYSTEM READY</h2>
            <p>
              Awaiting user authentication...
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}