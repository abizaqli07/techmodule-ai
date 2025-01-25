import {
  Markdown,
  PageBottom,
  PageTop
} from "@fileforge/react-print";

interface DocumentProps {
  markdownContent: string;
}

export const Document = ({ markdownContent }: DocumentProps) => {
  return (
    <div>
      {/* Document Header */}
      <PageTop>
        <span>Hello #1</span>
      </PageTop>

      {/* Document Footer */}
      <PageBottom>
        <div className="text-sm text-gray-400">Hello #3</div>
      </PageBottom>

      {/* Document Content */}
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
};
