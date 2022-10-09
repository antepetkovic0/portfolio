import React from "react";
import { TbMoon, TbSun } from "react-icons/tb";
import { useTheme } from "../../context/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label htmlFor="theme-switch" className="relative inline-block">
      <div className="w-[50px] h-[24px] rounded-[30px] bg-black" />
      <div className="absolute left-[6px] top-[50%] -translate-y-[50%]">
        <TbMoon color="#FACC14" fill="#FACC14" />
      </div>
      <div className="absolute right-[6px] top-[50%] -translate-y-[50%]">
        <TbSun color="#FACC14" fill="#FACC14" />
      </div>
      <div
        className={
          "absolute left-[1px] top-[1px] w-[22px] h-[22px] bg-white rounded-full transition-transform duration-300 ease-out " +
          (theme === "light" ? "translate-x-0" : "translate-x-[26px]")
        }
      />
      <input
        type="checkbox"
        id="theme-switch"
        className="hidden"
        onClick={toggleTheme}
      />
    </label>
  );
};

export default ThemeSwitch;
