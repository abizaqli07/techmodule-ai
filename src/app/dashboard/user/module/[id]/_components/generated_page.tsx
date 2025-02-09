"use client";

import { Button } from "~/components/ui/button";
import { useRef } from "react";
import generatePDF, { Resolution, Margin, type Options } from "react-to-pdf";
import { Separator } from "~/components/ui/separator";
import { ScrollArea } from "~/components/ui/scroll-area";

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

interface GeneratedPageProps {
  compiled: string;
}

const GeneratedPage = ({ compiled }: GeneratedPageProps) => {
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
      <ScrollArea className="h-full">
        <div className="mx-auto w-fit rounded-md border-[2px] p-4">
          <div className="w-[595px]" ref={targetRef}>
            <div
              dangerouslySetInnerHTML={{
                __html: compiled,
              }}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default GeneratedPage;
