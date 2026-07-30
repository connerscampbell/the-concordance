type DatapadShellProps = {
  children: React.ReactNode;
};

export default function DatapadShell({ children }: DatapadShellProps) {
  return (
    <main className="datapad">
      <div className="panel">
        <header className="header">
          <div>
            <h1>THE CONCORDANCE</h1>
            <span>GALACTIC DATA CRYSTAL INTERFACE</span>
          </div>

          <div className="status">
            <p>ACCESS: LIMITED</p>
            <p>STATUS: ONLINE</p>
          </div>
        </header>

        <div className="shell-content">
          {children}
        </div>
      </div>
    </main>
  );
}