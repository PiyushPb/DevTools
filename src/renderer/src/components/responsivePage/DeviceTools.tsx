import React from "react";
import { IoSettingsOutline, IoCameraOutline } from "react-icons/io5";
import { PiDevices } from "react-icons/pi";
import { HiOutlineCodeBracket } from "react-icons/hi2";

function DeviceTools({ theme }) {
  return (
    <div className="flex justify-end items-center mb-2 gap-2">
      <IoSettingsOutline className={`${theme.textPrimary}`} />
      <IoCameraOutline className={`${theme.textPrimary}`} />
      <div className="relative">
        <PiDevices className={`${theme.textPrimary}`} />
        <div className="absolute h-[6px] w-[6px] bg-red-400 rounded-full top-0 left-0"></div>
      </div>
      <HiOutlineCodeBracket className={`${theme.textPrimary}`} />
    </div>
  );
}

export default DeviceTools;
