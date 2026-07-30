import Sidebar from "./Sidebar";
import ProfileScreen from "./ProfileScreen";

type DashboardProps = {
  user: {
    userName: string;
    character: {
      fullName: string;
      species: string;
    };
  };
};

export default function Dashboard({
  user,
}: DashboardProps) {
  return (
    <main className="datapad">

      <header className="header">
        <div>
          <h1>THE CONCORDANCE</h1>
          <span>
            GALACTIC DATA CRYSTAL INTERFACE
          </span>
        </div>

        <div className="status">
          <p>ACCESS: GRANTED</p>
          <p>STATUS: ONLINE</p>
        </div>
      </header>


      <div className="interface">

        <Sidebar />

        <ProfileScreen
          character={user.character}
        />

      </div>

    </main>
  );
}