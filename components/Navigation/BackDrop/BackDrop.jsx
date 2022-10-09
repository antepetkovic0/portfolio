import React from "react";
import { useTheme } from "../../../context/theme-context";

const BackDrop = ({ onClick }) => {
  const { theme } = useTheme();
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[100] bg-slate-50/20 dark:bg-slate-900/20"
      onClick={onClick}
    >
      BackDrop
    </div>
  );
};

export default BackDrop;
