import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import { columns, type Module } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import Link from "next/link";

async function getData(): Promise<Module[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Module Pembelajaran Matematika",
      phase: "D",
      status: "pending",
      created_at: "24-2-2025",
    },
  ];
}

const ModulePage = async () => {
  const data = await getData();

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
