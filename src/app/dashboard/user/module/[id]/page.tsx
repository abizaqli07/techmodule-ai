import { compile } from "@fileforge/react-print";
import { Document } from "./_components/document";
import GeneratedPage from "./_components/generated_page";
import { api } from "~/trpc/server";

const GeneratedContent = async ({ params }: { params: { id: string } }) => {
  const markdownContent = await api.userRoute.generate.getOne({
    id: params.id,
  });
  const html = await compile(<Document content={markdownContent} />);

  return (
    <div>
      <GeneratedPage compiled={html} />
    </div>
  );
};

export default GeneratedContent;
