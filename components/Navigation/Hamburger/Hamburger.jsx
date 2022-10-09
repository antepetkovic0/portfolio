import React from "react";

const Hamburger = ({ isDrawerOpened, onClick }) => {
  return (
    <button
      className="flex justify-center items-center w-12 h-12 bg-transparent rounded-full cursor-pointer"
      onClick={onClick}
    >
      <span
        className={
          "hamburger-line relative before:absolute before:left-0 before:-top-2 before:transition-all after:absolute after:left-0 after:top-2 after:transition-all " +
          (isDrawerOpened
            ? "bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45"
            : "")
        }
      />
    </button>
  );
};

export default Hamburger;
