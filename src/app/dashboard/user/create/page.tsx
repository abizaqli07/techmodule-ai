import CreateModuleForm from "./_components/create_module_form";

const CreateModulePage = () => {
  return (
    <div className="px-8 space-y-16">
      <div className="text-center text-3xl font-bold">
        Create Learning Module
      </div>
      <div>
        <CreateModuleForm />
      </div>
    </div>
  );
};

export default CreateModulePage;
