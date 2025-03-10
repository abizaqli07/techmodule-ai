import { ScrollArea } from "~/components/ui/scroll-area";
import CreateModuleForm from "./_components/create_module_form";
import Image from "next/image";

const CreateModulePage = () => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-16 px-8 md:px-12 xl:px-16">
        <div className="relative mx-auto flex h-[350px] w-full max-w-[800px] flex-1 overflow-hidden rounded-3xl bg-primary">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/60 flex justify-center items-center">
            <div className="text-center text-3xl font-bold text-white">
              Create Learning Module
            </div>
          </div>
          <Image
            src={"/images/school.jpg"}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <CreateModuleForm />
        </div>
      </div>
    </ScrollArea>
  );
};

export default CreateModulePage;
