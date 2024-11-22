import React, { type ReactNode } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { auth } from "~/server/auth";

const UserDashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-2xl">
          Unauthenticated User, Please login before access this page
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className=" fixed inset-y-0 z-50 h-[80px] w-full">
        <Navbar />
      </div>
      <main className="container mx-auto mt-[180px] flex-col flex md:flex-row h-full">
        <div className="relative hidden flex-[2] md:flex">
          <Sidebar />
        </div>
        <div className="relative flex flex-[2] md:hidden mb-12">
          <MobileSidebar />
        </div>
        <div className="flex-[5]">{children}</div>
      </main>
    </div>
  );
};

export default UserDashboardLayout;