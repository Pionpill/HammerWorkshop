"use client";
import GlobalSnackbarAlert from "@/components/shared/GlobalSnackbarAlert";
import MobileHeader from "@/components/shared/Header/MobileHeader";
import PCHeader from "@/components/shared/Header/PCHeader";
import QuickDial from "@/components/shared/QuickDial";
import QQDialog from "@/components/shared/dialog/QQDialog";
import useDeviceType from "@/hook/common/useDeviceType";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { QQType } from "@/model/contact/QQContact";
import { darkTheme, lightTheme } from "@/styles/theme";
import { Box, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const RootTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  const deviceType = useDeviceType();
  const theme = useThemeStore((state) => state.theme);
  const muiTheme = useThemeSelector(lightTheme, darkTheme);

  return (
    <body className={`theme-${theme} ${theme}`}>
      <ThemeProvider theme={muiTheme}>
        <Box className="w-screen h-screen flex flex-col">
          {deviceType === "PC" ? <PCHeader /> : <MobileHeader />}
          <Box className="flex-grow">{children}</Box>
          {deviceType === "Mobile" && <QuickDial />}
        </Box>
        <QQDialog
          contact={{
            id: 712936357,
            name: "锤子工坊创作交流群",
            link: "https://qm.qq.com/q/pQQhdXI9Og",
            type: QQType.GROUP,
          }}
        />
        <QQDialog
          contact={{
            id: "203428owiq",
            name: "锤子工坊",
            link: "https://pd.qq.com/s/6n6vsmekp",
            type: QQType.CHANNEL,
          }}
        />
        <GlobalSnackbarAlert />
      </ThemeProvider>
    </body>
  );
};

export default RootTemplate;
