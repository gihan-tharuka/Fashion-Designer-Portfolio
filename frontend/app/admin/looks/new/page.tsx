"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { LookForm } from "@/components/admin/LookForm";
import { useAdminSession } from "@/components/admin/use-admin-session";
import { createAdminLook } from "@/lib/backend-api";
import type { AdminLookPayload } from "@/lib/backend-types";

export default function AdminNewLookPage() {
  const router = useRouter();
  const { token, adminUser, isCheckingAuth, authError } = useAdminSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(payload: AdminLookPayload) {
    if (!token) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const result = await createAdminLook(token, payload);

    setIsSubmitting(false);

    if (!result) {
      setError("Unable to create the look right now.");
      return;
    }

    router.replace("/admin/looks");
  }

  if (isCheckingAuth || !adminUser) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            {authError ?? "Loading look form..."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <AdminShell
      adminUser={adminUser}
      eyebrow="Looks"
      title="Create a new look"
      description="Add the core narrative, imagery, and supporting materials for a new portfolio entry."
    >
      <LookForm
        submitLabel="Create Look"
        isSubmitting={isSubmitting}
        error={error}
        onSubmit={handleSubmit}
      />
    </AdminShell>
  );
}
