"use client";

import { Button } from "~/components/ui/button";
import { useRef } from "react";
import generatePDF, { Resolution, Margin, type Options } from "react-to-pdf";
import { Separator } from "~/components/ui/separator";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "~/styles/markdown.module.css"

const options: Options = {
  filename: "techmodule.pdf",
  resolution: Resolution.MEDIUM,
  page: {
    margin: {
      top: Margin.SMALL,
      left: Margin.MEDIUM,
      bottom: Margin.SMALL,
      right: Margin.SMALL,
    },
    format: "A4",
    orientation: "p",
  },
  canvas: {
    mimeType: "image/png",
    qualityRatio: 1,
  },
  overrides: {
    pdf: {
      compress: true,
    },
    canvas: {
      useCORS: true,
    },
  },
};

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

const GeneratedPageAlt = ({ content }: DocumentProps) => {
  if (!content) {
    redirect("/404");
  }

  const targetRef = useRef(null);

  return (
    <div className="space-y-12 p-8">
      {/* Button */}
      <div className="flex items-center justify-between">
        <div className="text-left text-xl font-semibold md:text-3xl">
          Generated Module
        </div>
        <Button onClick={() => generatePDF(targetRef, options)}>
          Download PDF
        </Button>
      </div>

      <Separator />

      {/* Generated PDF */}

      <div className="mx-auto w-fit rounded-md border-[2px] p-4">
        <div className="w-[595px]" ref={targetRef}>
          <Markdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
            {`${content.message1}`}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPageAlt;
