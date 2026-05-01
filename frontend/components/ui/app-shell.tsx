"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

type AppVariant = "sidebar" | "header";

type Props = {
  children: ReactNode;
  variant?: AppVariant;
  sidebarOpen?: boolean;
};

export function AppShell({
  children,
  variant = "sidebar",
  sidebarOpen = true,
}: Props) {
  if (variant === "header") {
    return <div className="flex min-h-screen w-full flex-col">{children}</div>;
  }

  return (
    <SidebarProvider defaultOpen={sidebarOpen}>{children}</SidebarProvider>
  );
}
