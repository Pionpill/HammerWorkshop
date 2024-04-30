import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import React, { PropsWithChildren, StrictMode } from "react";
import "./global.css";

export const metadata: Metadata = {
  title: "HammerWorkshop",
  description: "HammerWorkshop Wiki",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <StrictMode>
    <CssBaseline />
    <html lang="zh">{children}</html>
  </StrictMode>
);

export default RootLayout;
