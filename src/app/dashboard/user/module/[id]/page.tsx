"use client"

import { ScrollArea } from "~/components/ui/scroll-area";
import GeneratedPageAlt from "./_components/generated_page_alt";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react";

const GeneratedContent = () => {
  const params = useParams<{ id: string;}>();
  const { data, isLoading, isError } = api.userRoute.generate.getOne.useQuery({
    id: params.id,
  });

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error..</div>
  }

  return (
      <ScrollArea className="h-full w-full">
        <GeneratedPageAlt content={data} />
      </ScrollArea>
  );
};

export default GeneratedContent;
