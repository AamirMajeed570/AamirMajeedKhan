import { NextRequest } from "next/server";

const LIMIT = 3;
const WINDOW_MS = 60_000;

const requests = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || current.resetAt <= now) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (current.count >= LIMIT) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }

  current.count += 1;
  return { allowed: true };
}
