import { createConnection } from "node:net";
import type {
  BackendApiResponse,
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
let reachabilityCache:
  | {
      checkedAt: number;
      reachable: boolean;
      url: string;
    }
  | null = null;

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
  if (typeof window !== "undefined") {
    return true;
  }

  const now = Date.now();
  if (
    reachabilityCache &&
    reachabilityCache.url === API_BASE_URL &&
    now - reachabilityCache.checkedAt < 10_000
  ) {
    return reachabilityCache.reachable;
  }

  const url = new URL(API_BASE_URL);
  const port = Number(url.port || (url.protocol === "https:" ? 443 : 80));

  const reachable = await new Promise<boolean>((resolve) => {
    const socket = createConnection({
      host: url.hostname,
      port,
    });

    const finish = (value: boolean) => {
      socket.destroy();
      resolve(value);
    };

    socket.setTimeout(250);
    socket.on("connect", () => finish(true));
    socket.on("timeout", () => finish(false));
    socket.on("error", () => finish(false));
  });

  reachabilityCache = {
    checkedAt: now,
    reachable,
    url: API_BASE_URL,
  };

  return reachable;
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
