"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { type Session } from "next-auth";

const UserMenu = ({ session }: { session: Session | null }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={session?.user.image ?? "/images/profile_picture.jpeg"}
          />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/"}>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/dashboard/user"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="flex items-center"
            onClick={() => void signOut({ callbackUrl: "/", redirect: true })}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
