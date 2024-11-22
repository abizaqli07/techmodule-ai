"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-12">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div className="flex border-[1.5px] border-gray-300 w-full justify-end items-center rounded-md px-4 py-3 text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600">
            <Menu />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Sidebar />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
