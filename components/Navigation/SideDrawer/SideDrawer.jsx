import React from "react";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbMoon, TbSun } from "react-icons/tb";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
import { useTheme } from "../../../context/theme-context";

const SideDrawer = ({ isDrawerOpened }) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        "fixed top-0 left-0 flex flex-col items-center justify-between w-[70%] max-w-sm h-full z-[200] p-4 transition-transform duration-300 ease-out " +
        (isDrawerOpened
          ? "translate-x-0 shadow-[3px_0px_5px_rgba(0,0,0,0.2)]"
          : "-translate-x-full shadow-none") +
        (theme === "light" ? " bg-slate-50" : " bg-slate-900")
      }
    >
      <div className="w-full flex justify-between items-center">
        <Link href="/">LOGO</Link>
        <ThemeSwitch />
      </div>
      <nav>
        <ul className="text-center">
          <li className="mb-4 text-lg font-bold uppercase tracking-widest">
            <Link href="/">About</Link>
          </li>
          <li className="mb-4 text-lg font-bold uppercase tracking-widest">
            <Link href="/">Playground</Link>
          </li>
          <li className="mb-4 text-lg font-bold uppercase tracking-widest">
            <Link href="/">Blog</Link>
          </li>
          <li className="mb-4 text-lg font-bold uppercase tracking-widest">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <div>
          <BsLinkedin size={24} />
        </div>
        <div>
          <BsGithub size={24} />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
