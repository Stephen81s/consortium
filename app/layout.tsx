// FICHIER : consortium/app/layout.tsx
// Layout global de l'application

import "./globals.css";

export const metadata = {
  title: "San Andreas — Intranet",
  description: "Portail Numérique Officiel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ background: "#020617", color: "white" }}>
        {children}
      </body>
    </html>
  );
}