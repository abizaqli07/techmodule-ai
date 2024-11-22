"use client"

import { BookOpenCheck, Contact, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard/user",
  },
  {
    icon: BookOpenCheck,
    label: "Module",
    href: "/dashboard/user/module",
  },
  {
    icon: Contact,
    label: "Create Module",
    href: "/dashboard/user/create",
  },
];

export const Sidebar = () => {
  return (
    <div className="h-fit w-full p-4 rounded-lg border-gray-300 border-[1px] shadow-lg sticky top-[180px]">
      <SidebarRoutes/>
    </div>
  )
}

const SidebarRoutes = () => {

  return (
    <div className="flex flex-col w-full space-y-2">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}