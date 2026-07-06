"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { clearAdminToken, getStoredAdminToken, storeAdminToken } from "@/lib/admin-auth";
import { loginAdmin } from "@/lib/backend-api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getStoredAdminToken();

    if (token) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);
    clearAdminToken();

    const result = await loginAdmin({
      email: email.trim(),
      password,
    });

    setIsSubmitting(false);

    if (!result.success || !result.data) {
      setError(result.message ?? "Unable to sign in right now.");
      return;
    }

    storeAdminToken(result.data.token);
    router.replace("/admin/dashboard");
  }

  return (
    <section className="section-pad">
      <div className="editorial-container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-md border border-gold/20 bg-[linear-gradient(135deg,#1b120d,#2a1a12_52%,#130d09)] p-8 text-cream shadow-[0_30px_100px_rgba(27,18,13,0.25)] sm:p-10 lg:p-12">
            <p className="eyebrow">Admin Access</p>
            <h1 className="serif mt-6 text-5xl font-semibold leading-[0.92] sm:text-6xl">
              LUMENÉ dashboard login
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-cream/72">
              Sign in to review collection metrics, read enquiries, and prepare
              the project for content management in the next phase.
            </p>
            <div className="mt-10 border-t border-gold/18 pt-6 text-sm leading-7 text-cream/68">
              <p>
                This phase uses localStorage for the admin token as a practical
                portfolio foundation.
              </p>
              <p className="mt-3">
                TODO: move admin sessions to httpOnly cookies in a later hardening phase.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/" variant="light">
                Back to Portfolio
              </ButtonLink>
            </div>
          </div>

          <div className="soft-card rounded-md p-7 sm:p-10">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div>
                <p className="eyebrow">Secure Login</p>
                <h2 className="serif mt-4 text-4xl font-semibold leading-none text-espresso sm:text-5xl">
                  Admin sign in
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                  Use the seeded admin credentials from the backend environment.
                </p>
              </div>

              <label className="grid gap-2">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-gold/24 bg-ivory/70 px-4 text-base text-espresso outline-none transition duration-300 placeholder:text-muted/60"
                  placeholder="admin@lumene.local"
                  autoComplete="email"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-gold/24 bg-ivory/70 px-4 text-base text-espresso outline-none transition duration-300 placeholder:text-muted/60"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </label>

              {error ? (
                <div className="rounded-md border border-rose/30 bg-rose/10 px-4 py-3 text-sm leading-6 text-brown">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-espresso bg-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-0.5 hover:bg-brown disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
