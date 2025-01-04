import React from "react";

function DevConsole({ theme, isVisible }) {
  return (
    <div
      className={`w-[1200px] h-full bg-gray-800 text-white p-4 transition-all duration-500 ease-in-out overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ${
        isVisible
          ? "opacity-100 translate-x-0 block"
          : "opacity-0 translate-x-[1300px] hidden"
      }`}
    >
      DevConsole
    </div>
  );
}

export default DevConsole;
