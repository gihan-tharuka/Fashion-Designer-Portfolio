"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { LookForm } from "@/components/admin/LookForm";
import { useAdminSession } from "@/components/admin/use-admin-session";
import { getAdminLook, updateAdminLook } from "@/lib/backend-api";
import type { AdminLookPayload, BackendAdminLookDetail } from "@/lib/backend-types";

export default function AdminEditLookPage() {
  const params = useParams<{ id: string }>();
  const { token, adminUser, isCheckingAuth, authError } = useAdminSession();
  const [look, setLook] = useState<BackendAdminLookDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!token || !params?.id) {
      return;
    }

    const authToken = token;
    const lookId = params.id;
    let isMounted = true;

    async function loadLook() {
      setIsLoading(true);
      const data = await getAdminLook(authToken, lookId);

      if (!isMounted) {
        return;
      }

      if (!data) {
        setError("Unable to load this look.");
        setIsLoading(false);
        return;
      }

      setLook(data);
      setError(null);
      setIsLoading(false);
    }

    void loadLook();

    return () => {
      isMounted = false;
    };
  }, [params?.id, token]);

  async function handleSubmit(payload: AdminLookPayload) {
    if (!token || !params?.id) {
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const result = await updateAdminLook(token, params.id, payload);

    setIsSubmitting(false);

    if (!result) {
      setError("Unable to save this look right now.");
      return;
    }

    setLook(result);
    setSuccess("Look updated successfully.");
  }

  if (isCheckingAuth || isLoading || !adminUser) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            {authError ?? "Loading look editor..."}
          </div>
        </div>
      </section>
    );
  }

  if (!look) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <div className="soft-card rounded-md p-8 text-sm leading-7 text-muted">
            {error ?? "Look not found."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <AdminShell
      adminUser={adminUser}
      eyebrow={`Look ${look.number}`}
      title={`Edit ${look.name}`}
      description="Update public-facing copy and supporting media without touching pricing or uploads yet."
      actions={
        <Link
          href={`/portfolio/${look.slug}`}
          target="_blank"
          className="text-sm font-semibold text-brown transition hover:text-espresso"
        >
          View public page
        </Link>
      }
    >
      <LookForm
        initialValue={look}
        submitLabel="Save Changes"
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        onSubmit={handleSubmit}
      />
    </AdminShell>
  );
}
