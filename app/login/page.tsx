"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const [error, setError] = useState(searchParams.get("error") === "1");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        window.location.href = "/";
      } else {
        setError(true);
        setLoading(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-light px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white">
            L
          </div>
          <h1 className="font-serif text-2xl text-primary">Luca MedTech</h1>
        </div>

        {/* Maintenance message */}
        <div className="mb-6 rounded-[var(--radius-lg)] bg-sand p-6 text-center">
          <p className="mb-1 text-sm font-semibold text-accent">
            Under utvikling
          </p>
          <p className="text-sm text-text-secondary">
            Nettsiden er ikke offentlig ennå. Logg inn for å se innholdet.
          </p>
        </div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-md)]"
        >
          {error && (
            <div className="mb-4 rounded-[var(--radius-md)] bg-error/10 p-3 text-center text-sm text-error">
              Feil brukernavn eller passord.
            </div>
          )}

          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-medium text-text-primary">
              Brukernavn
            </span>
            <input
              type="text"
              name="username"
              required
              autoComplete="username"
              className="w-full rounded-[var(--radius-md)] border border-border bg-bg-light px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </label>

          <label className="mb-6 block">
            <span className="mb-1 block text-sm font-medium text-text-primary">
              Passord
            </span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-[var(--radius-md)] border border-border bg-bg-light px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[var(--radius-xl)] bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light disabled:opacity-50"
          >
            {loading ? "Logger inn..." : "Logg inn"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-text-muted">
          &copy; 2026 Luca MedTech AS
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
