import AppSidebarLayout from "@/app/layouts/app/app-sidebar-layout";
import type { AppLayoutProps } from "@/types/ui";

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <AppSidebarLayout breadcrumbs={breadcrumbs} {...props}>
    <div className="p-10">{children}</div>
  </AppSidebarLayout>
);
