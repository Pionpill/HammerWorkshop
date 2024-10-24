"use client";
import { commonTheme } from "@/styles/theme.style";
import { useLayoutEffect, useState } from "react";

/** 设备类型，目前只支持 PC 和 Mobile */
export type DeviceType = "PC" | "Mobile";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>("PC");

  const handleResize = () => {
    if (globalThis.innerWidth < commonTheme.breakpoints.values.md) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("PC");
    }
  };

  useLayoutEffect(() => {
    handleResize();
    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, [globalThis.innerWidth]);

  return deviceType;
};

export default useDeviceType;
