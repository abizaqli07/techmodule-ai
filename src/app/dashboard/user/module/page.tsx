import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const ModulePage = async () => {
  const data = await api.userRoute.generate.getAll();

  return (
    <div className="px-8">
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
  );
};

export default ModulePage;
