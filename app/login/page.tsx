// app/login/page.tsx
// Page de connexion simple (on stylisera plus tard)

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Identifiants incorrects");
      return;
    }

    // Récupérer le rôle de l'utilisateur
    const { data: userData } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (userData?.role === "government") router.push("/dashboard/gov");
    else router.push("/dashboard");
  }

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>Connexion</h1>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.5rem" }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.5rem" }}
        />

        <button type="submit" style={{ padding: "0.5rem", background: "#2563eb", color: "white" }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}