// FICHIER : consortium/app/login/page.tsx
// Page de connexion simple

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });

    if (error) {
      alert("Erreur : " + error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 20 }}>
      <h1>Connexion</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPass(e.target.value)}
        style={{ padding: 8, marginBottom: 10 }}
      />

      <button onClick={handleLogin} style={{ padding: 8 }}>
        Se connecter
      </button>
    </div>
  );
}