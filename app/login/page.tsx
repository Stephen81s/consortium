// app/page.tsx
// Redirige automatiquement vers le dashboard

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}