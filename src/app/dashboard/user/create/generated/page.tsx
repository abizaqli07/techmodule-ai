import { compile } from "@fileforge/react-print";
import { Document } from "./_components/document";
import GeneratedPage from "./_components/generated_page";

const content = "#Hello markdown";

const GeneratedContent = async () => {
  const html = await compile(<Document markdownContent={content} />);

  return (
    <div>
      <GeneratedPage compiled={html} />
    </div>
  );
};

export default GeneratedContent;
