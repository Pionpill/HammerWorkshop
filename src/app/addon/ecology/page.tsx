"use client";
import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const EcologyPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Typography>Ecology</Typography>
      {children}
    </>
  );
};

export default EcologyPage;
