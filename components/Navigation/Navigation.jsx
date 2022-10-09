import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./BackDrop/BackDrop";
import Hamburger from "./Hamburger/Hamburger";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navigation = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <header className="fixed w-full h-20 z-[100] flex justify-between items-center px-2 2xl:px-16">
      <Image src="" alt="" />
      <nav>
        <ul className="hidden md:flex md:items-center">
          <li className="ml-10 uppercase text-xs font-bold tracking-widest">
            <Link href="/">About</Link>
          </li>
          <li className="ml-10 uppercase text-xs font-bold tracking-widest">
            <Link href="/">Playground</Link>
          </li>
          <li className="ml-10 uppercase text-xs font-bold tracking-widest">
            <Link href="/">Blog</Link>
          </li>
          <li className="mx-10 uppercase text-xs font-bold tracking-widest">
            <Link href="/">Contact</Link>
          </li>
          <ThemeSwitch />
        </ul>
        <div className="md:hidden">
          <Hamburger
            isDrawerOpened={isDrawerOpened}
            onClick={() => setIsDrawerOpened(true)}
          />
        </div>
        <SideDrawer isDrawerOpened={isDrawerOpened} />
        {isDrawerOpened && (
          <BackDrop onClick={() => setIsDrawerOpened(false)} />
        )}
      </nav>
    </header>
  );
};

export default Navigation;
