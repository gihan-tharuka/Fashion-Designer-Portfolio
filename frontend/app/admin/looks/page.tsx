"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminSession } from "@/components/admin/use-admin-session";
import { deleteAdminLook, getAdminLooks } from "@/lib/backend-api";
import type { BackendAdminLookSummary } from "@/lib/backend-types";

export default function AdminLooksPage() {
  const { token, adminUser, isCheckingAuth, authError } = useAdminSession();
  const [looks, setLooks] = useState<BackendAdminLookSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const authToken = token;
    let isMounted = true;

    async function loadLooks() {
      setIsLoading(true);
      const data = await getAdminLooks(authToken);

      if (!isMounted) {
        return;
      }

      if (!data) {
        setError("Unable to load looks right now.");
        setIsLoading(false);
        return;
      }

      setLooks(data);
      setError(null);
      setIsLoading(false);
    }

    void loadLooks();

    return () => {
      isMounted = false;
    };
  }, [token]);

  async function handleDelete(look: BackendAdminLookSummary) {
    if (!token) {
      return;
    }

    const confirmed = window.confirm(
      `Delete "${look.name}"? This only works when no garments are attached.`,
    );

    if (!confirmed) {
      return;
    }

    setBusyId(look.id);
    setError(null);
    const result = await deleteAdminLook(token, look.id);
    setBusyId(null);

    if (!result) {
      setError("Unable to delete this look. It may still have garments attached.");
      return;
    }

    setLooks((current) => current.filter((item) => item.id !== look.id));
  }

  if (isCheckingAuth || isLoading) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            Loading looks...
          </div>
        </div>
      </section>
    );
  }

  if (authError || error || !adminUser) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            {authError ?? error ?? "Unable to continue."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <AdminShell
      adminUser={adminUser}
      eyebrow="Looks"
      title="Manage portfolio looks"
      description="Edit the core portfolio entries that feed the public collection pages."
      actions={
        <Link
          href="/admin/looks/new"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-espresso bg-espresso px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-0.5 hover:bg-brown"
        >
          New Look
        </Link>
      }
    >
      <section className="soft-card overflow-hidden rounded-md">
        {error ? (
          <div className="border-b border-rose/20 bg-rose/8 px-6 py-4 text-sm text-brown">
            {error}
          </div>
        ) : null}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-gold/18 bg-cream/45 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              <tr>
                <th className="px-6 py-4">Number</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Slug</th>
                <th className="px-6 py-4">Featured</th>
                <th className="px-6 py-4">Order</th>
                <th className="px-6 py-4">Updated</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {looks.map((look) => (
                <tr key={look.id} className="border-b border-brown/8 align-top">
                  <td className="px-6 py-4 text-sm text-muted">{look.number}</td>
                  <td className="px-6 py-4">
                    <p className="serif text-2xl font-semibold text-brown">{look.name}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {look._count.garments} garments, {look.images.length} images
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">{look.slug}</td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {look.isFeatured ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">{look.displayOrder}</td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {new Date(look.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-3 text-sm font-semibold">
                      <Link
                        href={`/admin/looks/${look.id}`}
                        className="text-brown transition hover:text-espresso"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/portfolio/${look.slug}`}
                        className="text-teal transition hover:text-espresso"
                        target="_blank"
                      >
                        View
                      </Link>
                      <button
                        type="button"
                        onClick={() => void handleDelete(look)}
                        disabled={busyId === look.id}
                        className="text-brown/80 transition hover:text-brown disabled:opacity-50"
                      >
                        {busyId === look.id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
