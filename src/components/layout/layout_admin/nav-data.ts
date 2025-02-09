import { type Icons } from "~/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard/user",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Module",
    href: "/dashboard/user/module",
    icon: "laptop",
    label: "user",
  },
  {
    title: "Create Module",
    href: "/dashboard/user/create",
    icon: "kanban",
    label: "module",
  },
];