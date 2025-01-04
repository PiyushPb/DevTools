import React from "react";
import { devices } from "../../constants/devices";
import { CiMobile3 } from "react-icons/ci";
import { MdTabletMac } from "react-icons/md";
import { GrPersonalComputer } from "react-icons/gr";
import DeviceTools from "./DeviceTools";
import DeviceRenderer from "./DeviceRenderer";

const Body = ({ url, theme }) => {
  const selectedDevices = [
    devices.mobile[0],
    devices.mobile[3],
    devices.tablets[0],
    devices.computers[0],
    devices.computers[4],
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 pb-10 h-full overflow-x-hidden overflow-y-scroll hidden-scrollbar">
      {selectedDevices.map((device) => (
        <div className="flex flex-col" key={device.name}>
          <DeviceTools theme={theme} />
          <DeviceRenderer
            device={device}
            url={url}
            theme={theme}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
