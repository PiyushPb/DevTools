import React from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";

function HeaderExtensions({
  setConsoleVisible,
  resizePercentage,
  setResizePercentage,
}) {
  const toggleDevConsoleClick = () => {
    setConsoleVisible((prev: boolean) => !prev);
    console.log("Dev Console Toggled");
  };

  const handleResizeChange = (event) => {
    setResizePercentage(event.target.value);
  };

  return (
    <div className="px-2 flex items-center gap-2">
      <HiOutlineCodeBracket
        size={20}
        className="text-gray-400"
        onClick={toggleDevConsoleClick}
      />
      <input
        type="range"
        min="50"
        max="200"
        step="10"
        defaultValue={100}
        value={resizePercentage}
        onChange={handleResizeChange}
      />
    </div>
  );
}

export default HeaderExtensions;
