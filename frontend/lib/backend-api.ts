import type {
  AdminLoginPayload,
  BackendAdminDashboard,
  BackendAdminLookDetail,
  BackendAdminLookSummary,
  BackendAdminUser,
  BackendApiResponse,
  AdminLookPayload,
  BackendAuthLoginResponse,
  BackendCollectionResponse,
  BackendEnquiry,
  BackendLook,
  BackendLookDetailResponse,
  BackendPricingLook,
  BackendProcessItem,
  BackendSiteSettingsResponse,
  EnquiryPayload,
} from "@/lib/backend-types";

const DEFAULT_API_URL = "http://localhost:5001/api";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL;
export const ADMIN_TOKEN_STORAGE_KEY = "lumene-admin-token";

function logApiWarning(context: string, error: unknown) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  console.warn(`[backend-api] ${context}: ${message}`);
}

async function parseApiResponse<T>(response: Response): Promise<T> {
  const json = (await response.json()) as BackendApiResponse<T>;

  if (!response.ok || !json.success) {
    const message = json.success ? "Request failed" : json.message;
    throw new Error(message);
  }

  return json.data;
}

async function canReachApiServer() {
  return true;
}

type ApiRequestInit = RequestInit & {
  next?: {
    revalidate: number;
  };
};

async function apiRequest<T>(
  path: string,
  init?: ApiRequestInit,
): Promise<T | null> {
  try {
    const isServerGet =
      typeof window === "undefined" && (!init?.method || init.method === "GET");

    if (isServerGet && !(await canReachApiServer())) {
      logApiWarning(path, "backend unavailable, using local fallback");
      return null;
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      next:
        init?.method && init.method !== "GET" ? undefined : { revalidate: 60 },
    }).catch((error) => {
      logApiWarning(path, error);
      return null;
    });

    if (!response) {
      return null;
    }

    return await parseApiResponse<T>(response);
  } catch (error) {
    logApiWarning(path, error);
    return null;
  }
}

function getAuthHeaders(token?: string) {
  const headers: Record<string, string> = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export function getCollection() {
  return apiRequest<BackendCollectionResponse>("/collection/lumene");
}

export function getLooks() {
  return apiRequest<BackendLook[]>("/looks");
}

export function getLookBySlug(slug: string) {
  return apiRequest<BackendLookDetailResponse>(`/looks/${slug}`);
}

export function getPricing() {
  return apiRequest<BackendPricingLook[]>("/pricing");
}

export function getProcessItems() {
  return apiRequest<BackendProcessItem[]>("/process");
}

export function getSiteSettings() {
  return apiRequest<BackendSiteSettingsResponse>("/site-settings");
}

export async function createEnquiry(payload: EnquiryPayload) {
  const data = await apiRequest<BackendEnquiry>("/enquiries", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  return {
    success: Boolean(data),
    data,
    message: data ? null : "Unable to send enquiry right now.",
  };
}

export async function loginAdmin(payload: AdminLoginPayload) {
  const data = await apiRequest<BackendAuthLoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  return {
    success: Boolean(data),
    data,
    message: data ? null : "Invalid email or password.",
  };
}

export function getCurrentAdmin(token: string) {
  return apiRequest<BackendAdminUser>("/auth/me", {
    headers: getAuthHeaders(token),
    cache: "no-store",
  });
}

export function getAdminDashboard(token: string) {
  return apiRequest<BackendAdminDashboard>("/admin/dashboard", {
    headers: getAuthHeaders(token),
    cache: "no-store",
  });
}

export function getAdminEnquiries(token: string) {
  return apiRequest<BackendEnquiry[]>("/admin/enquiries", {
    headers: getAuthHeaders(token),
    cache: "no-store",
  });
}

export function getAdminLooks(token: string) {
  return apiRequest<BackendAdminLookSummary[]>("/admin/looks", {
    headers: getAuthHeaders(token),
    cache: "no-store",
  });
}

export function getAdminLook(token: string, id: string) {
  return apiRequest<BackendAdminLookDetail>(`/admin/looks/${id}`, {
    headers: getAuthHeaders(token),
    cache: "no-store",
  });
}

export function createAdminLook(token: string, payload: AdminLookPayload) {
  return apiRequest<BackendAdminLookDetail>("/admin/looks", {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}

export function updateAdminLook(
  token: string,
  id: string,
  payload: Partial<AdminLookPayload>,
) {
  return apiRequest<BackendAdminLookDetail>(`/admin/looks/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(token),
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}

export function deleteAdminLook(token: string, id: string) {
  return apiRequest<{ id: string; name: string; deleted: boolean }>(
    `/admin/looks/${id}`,
    {
      method: "DELETE",
      headers: getAuthHeaders(token),
      cache: "no-store",
    },
  );
}

export function updateAdminEnquiryStatus(
  token: string,
  id: string,
  status: "NEW" | "READ" | "ARCHIVED",
) {
  return apiRequest<BackendEnquiry>(`/admin/enquiries/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(token),
    body: JSON.stringify({ status }),
    cache: "no-store",
  });
}
