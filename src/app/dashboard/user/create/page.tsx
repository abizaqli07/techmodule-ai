import { ScrollArea } from "~/components/ui/scroll-area";
import CreateModuleForm from "./_components/create_module_form";

const CreateModulePage = () => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-16 px-8 md:px-12 xl:px-16">
        <div className="text-center text-3xl font-bold">
          Create Learning Module
        </div>
        <div>
          <CreateModuleForm />
        </div>
      </div>
    </ScrollArea>
  );
};

export default CreateModulePage;
