// components/Sidebar.tsx

// Squelette de la sidebar
// On la stylisera ensuite avec ton thème San Andreas
export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#111827",
        color: "white",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        Intranet
      </h2>

      <nav>
        <p>Dashboard</p>
        <p>Messages</p>
        <p>Entreprises</p>
        <p>Gouvernement</p>
      </nav>
    </aside>
  );
}