import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LinkProps } from "next/link";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export function toUrl(url: LinkProps["href"]): string {
  if (typeof url === "string") return url;

  return url.pathname ?? "/";
}