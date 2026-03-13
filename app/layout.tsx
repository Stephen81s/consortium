// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intranet",
  description: "Portail interne du Consortium",
};

// Layout global de l'application
// Il englobe toutes les pages et injecte le CSS global
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}