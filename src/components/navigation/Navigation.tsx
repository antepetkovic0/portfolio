"use client";
import Link from "next/link";
import { useState } from "react";
import { NAVIGATION_ROUTES } from "./navigation.types";
import Hamburger from "./Hamburger";

export default function Navigation() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpened(true);
  };

  return (
    <div className="flex w-full justify-between items-center p-8">
      <div>
        <Hamburger isDrawerOpened={isDrawerOpened} onClick={handleOpenDrawer} />
      </div>
      <nav>
        <ul className="flex gap-4">
          {NAVIGATION_ROUTES.map((route) => (
            <li
              key={route.id}
              className="font-medium text-lg hover:text-rose-500"
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
