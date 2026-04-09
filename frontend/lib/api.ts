const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type ApiOptions = RequestInit & { skipAuth?: boolean };

export async function api<T = unknown>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const res = await fetch(`${BASE}${endpoint}`, {
    ...options,
    credentials: "include", // CRITICAL: sends the httpOnly cookie
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...((options.headers as Record<string, string>) ?? {}),
    },
  });

  if (res.status === 401) {
    // Token expired or invalid — redirect to login
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    throw new Error("Unauthenticated");
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message ?? "API error");
  }

  return res.json();
}
