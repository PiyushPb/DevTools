import React, { useEffect, useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { GrPersonalComputer } from "react-icons/gr";
import { MdTabletMac } from "react-icons/md";

interface Device {
  name: string;
  category: "Mobile" | "Tablet" | "Computer";
  width: number;
  height: number;
  scale: number; // Default scale
  url?: string;
}

interface DeviceRendererProps {
  device: Device;
  theme: any; // Replace `any` with proper theme type if needed
  url: string | null; // website URL
  baseUrl: string; // base URL for resolving relative URLs
}

const DeviceRenderer: React.FC<DeviceRendererProps> = ({
  device,
  theme,
  url,
}) => {
  const [iframeSrc, setIframeSrc] = useState<string>("");
  const [dynamicScale, setDynamicScale] = useState<number>(device.scale);

  useEffect(() => {
    if (url) {
      setIframeSrc(url);
    } else {
      setIframeSrc("");
    }
  }, [url]);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const scaleX = viewportWidth / device.width;
      const scaleY = viewportHeight / device.height;

      // Pick the smaller scale factor to fit within the viewport
      const scale = Math.min(scaleX, scaleY, device.scale); // Do not exceed the default scale
      setDynamicScale(scale);
    };

    // Update scale on load and resize
    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, [device]);

  return (
    <>
      <div
        style={{
          width: `${device.width * dynamicScale}px`,
        }}
        className="mb-2 flex justify-between items-center"
      >
        <h3 className={`${theme.textPrimary} text-[12px]`}>{device.name}</h3>
        <div className="flex items-center gap-1">
          <span className={`${theme.textSecondary} text-[12px]`}>
            @ {device.width} x {device.height} px
          </span>
          <div className="ml-2">
            {device.category === "Mobile" && (
              <CiMobile3 className={`${theme.textPrimary}`} />
            )}
            {device.category === "Tablet" && (
              <MdTabletMac className={`${theme.textPrimary}`} />
            )}
            {device.category === "Computer" && (
              <GrPersonalComputer className={`${theme.textPrimary}`} />
            )}
          </div>
        </div>
      </div>

      {/* Device Frame */}
      <div
        style={{
          width: `${device.width * dynamicScale}px`,
          height: `${device.height * dynamicScale}px`,
          border: "1px solid #ccc",
          borderRadius: "5px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            title={device.name}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: `${device.width}px`,
              height: `${device.height}px`,
              border: "none",
              transform: `scale(${dynamicScale})`,
              transformOrigin: "top left",
            }}
          />
        )}
      </div>
    </>
  );
};

export default DeviceRenderer;
