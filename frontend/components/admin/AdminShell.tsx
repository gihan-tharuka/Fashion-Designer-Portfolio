"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { adminNavItems } from "@/components/admin/admin-nav";
import { clearAdminToken } from "@/lib/admin-auth";
import type { BackendAdminUser } from "@/lib/backend-types";

type AdminShellProps = {
  adminUser: BackendAdminUser;
  title: string;
  eyebrow?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function AdminShell({
  adminUser,
  title,
  eyebrow = "Admin Panel",
  description,
  actions,
  children,
}: AdminShellProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleLogout() {
    clearAdminToken();
    router.replace("/admin/login");
  }

  return (
    <section className="section-pad">
      <div className="editorial-container grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="soft-card rounded-md p-6">
          <p className="eyebrow">Admin Panel</p>
          <h1 className="serif mt-4 text-4xl font-semibold leading-none text-espresso">
            LUMENÉ CMS
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Signed in as {adminUser.name}
          </p>

          <nav className="mt-8 grid gap-2">
            {adminNavItems.map((item) =>
              item.enabled ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`focus-ring rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 ${
                    pathname === item.href
                      ? "border-gold/40 bg-cream/80 text-espresso"
                      : "border-brown/10 text-muted hover:border-gold/28 hover:bg-cream/60 hover:text-espresso"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="rounded-full border border-brown/8 px-4 py-3 text-sm font-semibold text-muted/65"
                >
                  {item.label}
                </span>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={handleLogout}
            className="focus-ring mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-brown/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/70 hover:text-espresso"
          >
            Log Out
          </button>
        </aside>

        <div className="grid gap-8">
          <div className="soft-card rounded-md p-7 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="serif mt-4 text-5xl font-semibold leading-[0.94] text-espresso">
                  {title}
                </h2>
                {description ? (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                    {description}
                  </p>
                ) : null}
              </div>
              {actions ? <div>{actions}</div> : null}
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
