"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { clearAdminToken, getStoredAdminToken } from "@/lib/admin-auth";
import {
  getAdminDashboard,
  getAdminEnquiries,
  getCurrentAdmin,
} from "@/lib/backend-api";
import type {
  BackendAdminDashboard,
  BackendAdminUser,
  BackendEnquiry,
} from "@/lib/backend-types";

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", active: true },
  { label: "Looks", href: "#", active: false },
  { label: "Pricing", href: "#", active: false },
  { label: "Process", href: "#", active: false },
  { label: "Enquiries", href: "#enquiries", active: false },
  { label: "Settings", href: "#", active: false },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<BackendAdminUser | null>(null);
  const [dashboard, setDashboard] = useState<BackendAdminDashboard | null>(null);
  const [enquiries, setEnquiries] = useState<BackendEnquiry[]>([]);

  useEffect(() => {
    const token = getStoredAdminToken();

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    const authToken = token;

    let isMounted = true;

    async function loadDashboard() {
      const [me, dashboardData, enquiriesData] = await Promise.all([
        getCurrentAdmin(authToken),
        getAdminDashboard(authToken),
        getAdminEnquiries(authToken),
      ]);

      if (!isMounted) {
        return;
      }

      if (!me || !dashboardData || !enquiriesData) {
        clearAdminToken();
        setError("Your admin session is unavailable or has expired.");
        setIsLoading(false);
        router.replace("/admin/login");
        return;
      }

      setAdminUser(me);
      setDashboard(dashboardData);
      setEnquiries(enquiriesData);
      setIsLoading(false);
    }

    void loadDashboard();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const statCards = useMemo(() => {
    if (!dashboard) {
      return [];
    }

    return [
      { label: "Looks", value: dashboard.totalLooks },
      { label: "Garments", value: dashboard.totalGarments },
      { label: "Enquiries", value: dashboard.totalEnquiries },
      { label: "New Enquiries", value: dashboard.newEnquiries },
      { label: "Process Items", value: dashboard.processItems },
      { label: "Confirmed Costings", value: dashboard.confirmedCostings },
    ];
  }, [dashboard]);

  function handleLogout() {
    clearAdminToken();
    router.replace("/admin/login");
  }

  if (isLoading) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            Loading admin dashboard...
          </div>
        </div>
      </section>
    );
  }

  if (error || !adminUser || !dashboard) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8">
            <p className="eyebrow">Admin Access</p>
            <h1 className="serif mt-4 text-4xl font-semibold text-espresso">
              Session unavailable
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {error ?? "Please sign in again to continue."}
            </p>
            <Link
              href="/admin/login"
              className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-espresso bg-espresso px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-0.5 hover:bg-brown"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </section>
    );
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
            {adminNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`focus-ring rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 ${
                  item.active
                    ? "border-gold/40 bg-cream/80 text-espresso"
                    : "border-brown/10 text-muted hover:border-gold/28 hover:bg-cream/60 hover:text-espresso"
                }`}
              >
                {item.label}
              </a>
            ))}
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
                <p className="eyebrow">Dashboard</p>
                <h2 className="serif mt-4 text-5xl font-semibold leading-[0.94] text-espresso">
                  Admin overview
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  A read-only foundation for upcoming content management, pricing
                  editing, process updates, and enquiry handling.
                </p>
              </div>
              <div className="text-sm leading-7 text-muted">
                <p>Price on request costings: {dashboard.priceOnRequestCostings}</p>
                <p>Latest admin email: {adminUser.email}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {statCards.map((card) => (
                <article
                  key={card.label}
                  className="rounded-md border border-gold/18 bg-ivory/72 p-5"
                >
                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {card.label}
                  </p>
                  <p className="serif mt-4 text-4xl font-semibold leading-none text-espresso">
                    {card.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <section id="enquiries" className="soft-card rounded-md p-7 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-gold/18 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Latest Enquiries</p>
                  <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso">
                    Read-only enquiry inbox
                  </h3>
                </div>
                <p className="text-sm text-muted">{enquiries.length} total records loaded</p>
              </div>

              <div className="mt-6 grid gap-4">
                {enquiries.slice(0, 8).map((enquiry) => (
                  <article
                    key={enquiry.id}
                    className="rounded-md border border-brown/10 bg-cream/55 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
                          {enquiry.interestType.replaceAll("_", " ")}
                        </p>
                        <h4 className="serif mt-2 text-2xl font-semibold text-brown">
                          {enquiry.name}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-muted">{enquiry.email}</p>
                      </div>
                      <div className="text-sm leading-7 text-muted sm:text-right">
                        <p>{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                        <p>{enquiry.status}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted">{enquiry.message}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-8">
              <div className="soft-card rounded-md p-7 sm:p-8">
                <p className="eyebrow">Recently Updated Looks</p>
                <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso">
                  Collection activity
                </h3>
                <div className="mt-6 grid gap-3">
                  {dashboard.latestUpdatedLooks.map((look) => (
                    <article
                      key={look.id}
                      className="rounded-md border border-brown/10 bg-cream/55 p-4"
                    >
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
                        Look {look.number}
                      </p>
                      <h4 className="serif mt-2 text-2xl font-semibold text-brown">
                        {look.name}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        /portfolio/{look.slug}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                        Updated {new Date(look.updatedAt).toLocaleDateString()}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="soft-card rounded-md p-7 sm:p-8">
                <p className="eyebrow">Phase 4 Ready</p>
                <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso">
                  CMS groundwork
                </h3>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">
                  <li>Dashboard stats connected to protected backend APIs</li>
                  <li>Admin identity and JWT session flow in place</li>
                  <li>Read-only enquiries ready for moderation tools</li>
                  <li>Sidebar structure ready for CRUD screens next</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
