import React from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";

function HeaderExtensions({ setConsoleVisible }) {
  const toggleDevConsoleClick = () => {
    setConsoleVisible((prev: boolean) => !prev);
    console.log("Dev Console Toggled");
  };

  return (
    <div className="px-2">
      <HiOutlineCodeBracket
        size={20}
        className="text-gray-400"
        onClick={toggleDevConsoleClick}
      />
    </div>
  );
}

export default HeaderExtensions;
