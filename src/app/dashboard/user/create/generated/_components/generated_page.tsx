"use client";

import { Button } from "~/components/ui/button";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

interface GeneratedPageProps {
  compiled: string;
}

const GeneratedPage = ({ compiled }: GeneratedPageProps) => {
  const targetRef = useRef(null);

  return (
    <>
      {/* Button */}
      <div>
        <Button
          onClick={() => generatePDF(targetRef, { filename: "techmodule.pdf" })}
        >
          Download PDF
        </Button>
      </div>

      {/* Generated PDF */}
      <div ref={targetRef}>
        <div
          dangerouslySetInnerHTML={{
            __html: compiled,
          }}
        />
      </div>
    </>
  );
};

export default GeneratedPage;
