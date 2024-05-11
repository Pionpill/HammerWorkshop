"use client";
import { useThemeSelector } from "@/hook/store/useThemeStore";
import QRCode, { QRCodeProps } from "react-qr-code";

const QrCode: React.FC<QRCodeProps> = (props) => {
  const defaultColorObj = {
    bgColor: "transparent",
    fgColor: useThemeSelector("#252525", "#f3f3f3"),
  };
  const realProps = Object.assign(defaultColorObj, props) as any;
  return <QRCode {...realProps} />;
};

export default QrCode;
