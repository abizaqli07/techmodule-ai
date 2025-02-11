import { ScrollArea } from "~/components/ui/scroll-area";
import { api } from "~/trpc/server";
import GeneratedPageAlt from "./_components/generated_page_alt";

const GeneratedContent = async ({ params }: { params: { id: string } }) => {
  const markdownContent = await api.userRoute.generate.getOne({
    id: params.id,
  });

  return (
      <ScrollArea className="h-full w-full">
        <GeneratedPageAlt content={markdownContent} />
      </ScrollArea>
  );
};

export default GeneratedContent;
