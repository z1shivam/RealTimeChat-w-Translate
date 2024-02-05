import React from "react";
import Logo from "./ui/logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./ui/UserButton";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl flex-col items-center bg-white px-5 pl-2 dark:bg-gray-900 sm:flex-row">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* language select */}

          {/* session && */}
          {/* dark mode toggle */}
          <DarkModeToggle />
          {/* user button */}
          <UserButton />
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  );
}

export default Header;
