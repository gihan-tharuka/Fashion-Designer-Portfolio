"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminSession } from "@/components/admin/use-admin-session";
import { getAdminDashboard, getAdminEnquiries } from "@/lib/backend-api";
import type { BackendAdminDashboard, BackendEnquiry } from "@/lib/backend-types";

export default function AdminDashboardPage() {
  const { token, adminUser, isCheckingAuth, authError } = useAdminSession();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dashboard, setDashboard] = useState<BackendAdminDashboard | null>(null);
  const [enquiries, setEnquiries] = useState<BackendEnquiry[]>([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    const authToken = token;
    let isMounted = true;

    async function loadDashboard() {
      setIsLoading(true);

      const [dashboardData, enquiriesData] = await Promise.all([
        getAdminDashboard(authToken),
        getAdminEnquiries(authToken),
      ]);

      if (!isMounted) {
        return;
      }

      if (!dashboardData || !enquiriesData) {
        setError("Unable to load the admin dashboard right now.");
        setIsLoading(false);
        return;
      }

      setDashboard(dashboardData);
      setEnquiries(enquiriesData);
      setError(null);
      setIsLoading(false);
    }

    void loadDashboard();

    return () => {
      isMounted = false;
    };
  }, [token]);

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

  if (isCheckingAuth || isLoading) {
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

  if (authError || error || !adminUser || !dashboard) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8">
            <p className="eyebrow">Admin Access</p>
            <h1 className="serif mt-4 text-4xl font-semibold text-espresso">
              Session unavailable
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {authError ?? error ?? "Please sign in again to continue."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <AdminShell
      adminUser={adminUser}
      eyebrow="Dashboard"
      title="Admin overview"
      description="A practical CMS foundation for editing looks and keeping enquiry handling organized."
      actions={
        <div className="text-sm leading-7 text-muted">
          <p>Price on request costings: {dashboard.priceOnRequestCostings}</p>
          <p>Latest admin email: {adminUser.email}</p>
        </div>
      }
    >
      <div className="grid gap-8">
        <div className="soft-card rounded-md p-7 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
          <section className="soft-card rounded-md p-7 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-gold/18 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Latest Enquiries</p>
                <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso">
                  Inbox snapshot
                </h3>
              </div>
              <Link
                href="/admin/enquiries"
                className="text-sm font-semibold text-brown transition hover:text-espresso"
              >
                Open enquiries
              </Link>
            </div>

            <div className="mt-6 grid gap-4">
              {enquiries.slice(0, 5).map((enquiry) => (
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
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">
                    {enquiry.message}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8">
            <div className="soft-card rounded-md p-7 sm:p-8">
              <div className="flex items-end justify-between gap-4 border-b border-gold/18 pb-5">
                <div>
                  <p className="eyebrow">Recently Updated Looks</p>
                  <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso">
                    Collection activity
                  </h3>
                </div>
                <Link
                  href="/admin/looks"
                  className="text-sm font-semibold text-brown transition hover:text-espresso"
                >
                  Manage looks
                </Link>
              </div>
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
                    <p className="mt-2 text-sm leading-7 text-muted">/portfolio/{look.slug}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                      Updated {new Date(look.updatedAt).toLocaleDateString()}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}
