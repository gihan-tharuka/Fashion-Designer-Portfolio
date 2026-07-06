"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clearAdminToken, getStoredAdminToken } from "@/lib/admin-auth";
import { getCurrentAdmin } from "@/lib/backend-api";
import type { BackendAdminUser } from "@/lib/backend-types";

export function useAdminSession() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<BackendAdminUser | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = getStoredAdminToken();

    if (!storedToken) {
      router.replace("/admin/login");
      return;
    }

    const authToken = storedToken;
    let isMounted = true;

    async function loadAdminUser() {
      const currentAdmin = await getCurrentAdmin(authToken);

      if (!isMounted) {
        return;
      }

      if (!currentAdmin) {
        clearAdminToken();
        setAuthError("Your admin session is unavailable or has expired.");
        setIsCheckingAuth(false);
        router.replace("/admin/login");
        return;
      }

      setToken(authToken);
      setAdminUser(currentAdmin);
      setIsCheckingAuth(false);
    }

    void loadAdminUser();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return {
    token,
    adminUser,
    isCheckingAuth,
    authError,
  };
}
