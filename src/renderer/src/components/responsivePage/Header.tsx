import { useTheme } from "@material-tailwind/react";
import React from "react";
import { GoArrowLeft, GoArrowRight, GoHome } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import themes from "../../constants/theme";
import HeaderExtensions from "./HeaderExtensions";

function Header({ setUrl, url, setConsoleVisible }) {
  const { currentTheme } = useTheme();
  const theme = themes[currentTheme] || themes.light;

  return (
    <div className="w-full flex justify-normal items-center">
      <div className="flex justify-start items-center gap-2">
        <div>
          <GoArrowLeft size={20} className="text-gray-400" />
        </div>
        <div>
          <GoArrowRight size={20} className="text-gray-400" />
        </div>
        <div className="">
          <MdOutlineRefresh size={20} className="text-gray-400" />
        </div>
        <div className="">
          <GoHome size={20} className="text-gray-400" />
        </div>
      </div>
      <div
        className={`w-full ml-3 px-4 py-2 text-[14px] border-[1px] border-solid border-[#E5E7EB] rounded-full`}
      >
        <input
          type="text"
          placeholder="Enter the URL"
          className={`w-full border-none outline-none bg-transparent ${theme.textPrimary}`}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </div>
      <HeaderExtensions setConsoleVisible={setConsoleVisible} />
    </div>
  );
}

export default Header;
