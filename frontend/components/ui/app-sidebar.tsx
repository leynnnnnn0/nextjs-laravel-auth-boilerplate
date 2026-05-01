'use client';

import {
  BookOpen,
  Calendar,
  DoorClosed,
  FolderGit2,
  GitGraphIcon,
  LayoutGrid,
  List,
  ListCheck,
  User2Icon,
  Wrench,
} from "lucide-react";
import AppLogo from "./AppLogo";
import { NavFooter } from "@/components/ui/nav-footer";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavItem } from "@/types/navigation";
import Link from "next/link";

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Users",
    href: "/users",
    icon: User2Icon,
  },
];

const footerNavItems: NavItem[] = [
  {
    title: "Github",
    href: "https://github.com/leynnnnnn0/nextjs-laravel-auth-boilerplate.git",
    icon: GitGraphIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <span className="text-sm text-center font-bold">Next.js / Laravel Starter Kit</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
