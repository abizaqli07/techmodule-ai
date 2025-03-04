import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { type RouterOutputs } from "~/trpc/react";

interface RecentModuleInterface {
  data: RouterOutputs["userRoute"]["generate"]["getOverview"];
}

export function RecentModule({ data }: RecentModuleInterface) {
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.title}</p>
            <p className="text-sm text-muted-foreground">
              {item.subject}
            </p>
          </div>
          <div className="ml-auto font-medium">{item.class}</div>
        </div>
      ))}
    </div>
  );
}
