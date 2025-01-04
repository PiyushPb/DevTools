import React, { useState, useEffect } from "react";
import { devices } from "../../constants/devices";
import DeviceTools from "./DeviceTools";
import DeviceRenderer from "./DeviceRenderer";

const Body = ({ url, theme, resizePercentage }) => {
  const selectedDevices = [
    devices.mobile[0],
    devices.mobile[3],
    devices.tablets[0],
    devices.computers[0],
    devices.computers[4],
  ];

  const scale = resizePercentage / 100;

  // This function will be called to update the dimensions of the device containers
  const [deviceDimensions, setDeviceDimensions] = useState<{
    [key: string]: { width: number; height: number };
  }>({});

  // Handle resizing of each device
  const handleResize = (deviceName: string, width: number, height: number) => {
    setDeviceDimensions((prevDimensions) => ({
      ...prevDimensions,
      [deviceName]: { width, height },
    }));
  };

  return (
    <div className="flex w-full h-full pb-5">
      <div className="flex flex-wrap gap-5 p-4 pb-10 h-full overflow-x-hidden overflow-y-scroll hidden-scrollbar">
        {selectedDevices.map((device) => {
          const dimensions = deviceDimensions[device.name] || {
            width: device.width,
            height: device.height,
          };

          return (
            <div
              key={device.name}
              className="relative mb-10"
              style={{
                width: `${dimensions.width * scale}px`, // Apply scaling here
                height: `${dimensions.height * scale}px`, // Apply scaling here
              }}
            >
              <div className="flex flex-col">
                <DeviceTools theme={theme} scale={scale} />
                <DeviceRenderer
                  device={device}
                  url={url}
                  theme={theme}
                  scale={scale}
                  onResize={(width, height) =>
                    handleResize(device.name, width, height)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
