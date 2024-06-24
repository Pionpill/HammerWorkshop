import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import AsideMenu from "./AsideMenu";

const WikiTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box className="w-full h-full flex">
      <AsideMenu />
      <Box className="flex-grow flex-shrink">{children}</Box>
    </Box>
  );
};

export default WikiTemplate;
