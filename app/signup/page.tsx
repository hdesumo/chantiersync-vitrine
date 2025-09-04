"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    affiliationCode: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.chantiersync.com/tenant-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          affiliationCode: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 transition-colors">
        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
          Inscription entreprise
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="companyName"
            placeholder="Nom de l'entreprise"
            value={form.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <input
            type="text"
            name="contactName"
            placeholder="Nom du contact"
            value={form.contactName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <input
            type="text"
            name="affiliationCode"
            placeholder="Code d'affiliation (optionnel)"
            value={form.affiliationCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            {status === "loading" ? "Envoi en cours..." : "S'inscrire"}
          </button>
        </form>

        {/* Messages */}
        {status === "success" && (
          <p className="mt-4 text-green-600 dark:text-green-400 text-center">
            ✅ Votre demande a été envoyée avec succès ! Un SuperAdmin la validera sous peu.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 dark:text-red-400 text-center">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </div>
    </main>
  );
}
