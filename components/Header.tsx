import Logo from "./ui/logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./ui/UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./ui/CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-slate-200 bg-white dark:border-slate-800 dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl flex-col items-center bg-white px-5 pl-2 dark:bg-gray-900 sm:flex-row">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href={"/pricing"}>Pricing</Link>
            </>
          )}
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
