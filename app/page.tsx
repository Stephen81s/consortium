// FICHIER : consortium/app/page.tsx
// Redirection automatique vers /dashboard

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}