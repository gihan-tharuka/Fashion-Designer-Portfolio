"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminSession } from "@/components/admin/use-admin-session";
import { getAdminEnquiries, updateAdminEnquiryStatus } from "@/lib/backend-api";
import type { BackendEnquiry } from "@/lib/backend-types";

const enquiryStatuses = ["NEW", "READ", "ARCHIVED"] as const;

export default function AdminEnquiriesPage() {
  const { token, adminUser, isCheckingAuth, authError } = useAdminSession();
  const [enquiries, setEnquiries] = useState<BackendEnquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const authToken = token;
    let isMounted = true;

    async function loadEnquiries() {
      setIsLoading(true);
      const data = await getAdminEnquiries(authToken);

      if (!isMounted) {
        return;
      }

      if (!data) {
        setError("Unable to load enquiries right now.");
        setIsLoading(false);
        return;
      }

      setEnquiries(data);
      setError(null);
      setIsLoading(false);
    }

    void loadEnquiries();

    return () => {
      isMounted = false;
    };
  }, [token]);

  async function handleStatusChange(
    enquiryId: string,
    status: BackendEnquiry["status"],
  ) {
    if (!token) {
      return;
    }

    setBusyId(enquiryId);
    setError(null);
    const updated = await updateAdminEnquiryStatus(token, enquiryId, status);
    setBusyId(null);

    if (!updated) {
      setError("Unable to update enquiry status right now.");
      return;
    }

    setEnquiries((current) =>
      current.map((item) => (item.id === enquiryId ? updated : item)),
    );
  }

  if (isCheckingAuth || isLoading) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            Loading enquiries...
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
      eyebrow="Enquiries"
      title="Manage enquiry statuses"
      description="Review incoming messages and mark them as new, read, or archived."
    >
      <section className="soft-card overflow-hidden rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-gold/18 bg-cream/45 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Interest</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Created</th>
                <th className="px-6 py-4">Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-b border-brown/8 align-top">
                  <td className="px-6 py-4">
                    <p className="serif text-2xl font-semibold text-brown">{enquiry.name}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{enquiry.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {enquiry.interestType.replaceAll("_", " ")}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={enquiry.status}
                      onChange={(event) =>
                        void handleStatusChange(
                          enquiry.id,
                          event.target.value as BackendEnquiry["status"],
                        )
                      }
                      disabled={busyId === enquiry.id}
                      className="focus-ring min-h-11 rounded-md border border-gold/24 bg-ivory/70 px-3 text-sm text-espresso outline-none"
                    >
                      {enquiryStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {new Date(enquiry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm leading-7 text-muted">
                    {enquiry.message.slice(0, 180)}
                    {enquiry.message.length > 180 ? "..." : ""}
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
