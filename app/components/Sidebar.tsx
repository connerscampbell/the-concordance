type Screen =
  | "profile"
  | "abilities"
  | "combat"
  | "inventory"
  | "features"
  | "contacts"
  | "archive"
  | "campaign";

type Props = {
  active: Screen;
  onChange: (screen: Screen) => void;
};

const buttons: {
  label: string;
  value: Screen;
}[] = [
  { label: "PROFILE", value: "profile" },
  { label: "ABILITIES", value: "abilities" },
  { label: "COMBAT", value: "combat" },
  { label: "INVENTORY", value: "inventory" },
  { label: "FEATURES", value: "features" },
  { label: "CONTACTS", value: "contacts" },
  { label: "ARCHIVE", value: "archive" },
  { label: "CAMPAIGN", value: "campaign" },
];

export default function Sidebar({
  active,
  onChange,
}: Props) {
  return (
    <aside className="sidebar">
      <h2>SYSTEM MENU</h2>

      <nav>
        {buttons.map((button) => (
          <button
            key={button.value}
            className={
              active === button.value
                ? "active"
                : ""
            }
            onClick={() =>
              onChange(button.value)
            }
          >
            {button.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}