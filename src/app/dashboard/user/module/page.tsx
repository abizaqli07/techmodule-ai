import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { ScrollArea } from "~/components/ui/scroll-area";

export const revalidate = 0;

const ModulePage = async () => {
  const data = await api.userRoute.generate.getAll();

  return (
    <ScrollArea className="h-full">
      <div className="px-8 md:px-12 xl:px-16">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold lg:text-4xl">Module List</div>
          <Link href={"/dashboard/user/create"}>
            <Button>
              {" "}
              <Plus /> Create Module
            </Button>
          </Link>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default ModulePage;
