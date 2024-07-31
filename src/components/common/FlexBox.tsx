import { Box, BoxProps } from "@mui/material";
import { PropsWithChildren } from "react";

const FlexBox: React.FC<PropsWithChildren<BoxProps>> = ({ children, className, ...props }) => {
  const realClassName = className ? "flex " + className : "flex";
  return (
    <Box className={realClassName} {...props}>
      {children}
    </Box>
  );
};

export default FlexBox;
