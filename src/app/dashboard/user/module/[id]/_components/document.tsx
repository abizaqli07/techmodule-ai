import {
  CSS,
  Markdown,
  PageBottom,
  PageTop,
  Tailwind,
} from "@fileforge/react-print";
import { redirect } from "next/navigation";

type DocumentProps = {
  content:
    | {
        id: string;
        userId: string;
        title: string;
        class: string;
        subject: string;
        message1: string;
        message2: string;
        message3: string;
        message4: string;
        createdAt: Date;
        updatedAt: Date;
      }
    | undefined;
};

export const Document = ({ content }: DocumentProps) => {
  if (!content) {
    redirect("/404");
  }

  return (
    <div>
      <Tailwind>
        {/* Tailwind Style */}
        <CSS>{`@page {size: A4;margin-top:2cm;margin-right:4cm;margin-left:2cm;margin-bottom:2cm;`}</CSS>

        {/* Document Header */}
        <PageTop>
          <span>Hello #1</span>
        </PageTop>

        {/* Document Footer */}
        <PageBottom>
          <div className="text-sm text-gray-400">Hello #3</div>
        </PageBottom>

        {/* Document Content */}
        <Markdown
          options={{
            overrides: {
              h1: {
                props: {
                  className: "text-2xl font-bold my-3",
                },
              },
              p: {
                props: {
                  className: "text-sm leading-5 text-justify",
                },
              },
            },
          }}
        >
          {`
            ${content.message1}
            ${content.message2}
            ${content.message3}
            ${content.message4}
          `}
        </Markdown>
      </Tailwind>
    </div>
  );
};
