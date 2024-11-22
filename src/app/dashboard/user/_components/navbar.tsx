import UserMenu from "./user_menu";
import { Logo } from "./logo";
import { auth } from "~/server/auth";

export const Navbar = async () => {
  const session = await auth();
  return (
    <div className="h-full border-b bg-white p-4 shadow-sm">
      <div className="container mx-auto flex h-full items-center">
        <Logo />
        <div className="ml-auto flex gap-x-2">
          <UserMenu session={session} />
        </div>
      </div>
    </div>
  );
};
