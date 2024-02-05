'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import UserAvatar from "./UserAvatar";
import { Button } from "./button";
import { signIn, signOut } from "next-auth/react";

function UserButton({ session }: { session: Session | null }) {
  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign in
      </Button>
    );
  }
  return session && (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session.user?.name} image={session.user?.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{`Hi, ${session.user?.name}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
