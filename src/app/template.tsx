"use client";
import FlexBox from "@/components/common/FlexBox";
import GlobalSnackbarAlert from "@/components/shared/GlobalSnackbarAlert";
import MobileHeader from "@/components/shared/Header/MobileHeader";
import PCHeader from "@/components/shared/Header/PCHeader";
import QuickDial from "@/components/shared/QuickDial";
import QQDialog from "@/components/shared/dialog/QQDialog";
import useDeviceType from "@/hook/common/useDeviceType";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { QQType } from "@/model/contact/QQContact";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const RootTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  const deviceType = useDeviceType();
  const theme = useThemeStore((state) => state.theme);
  const muiTheme = useThemeSelector(lightTheme, darkTheme);

  return (
    <body className={`theme-${theme} ${theme} text-primary`}>
      <ThemeProvider theme={muiTheme}>
        <FlexBox className="size-full h-screen flex-col">
          {deviceType === "PC" ? <PCHeader /> : <MobileHeader />}
          <FlexBox className="flex-grow bg-primary flex-1">{children}</FlexBox>
          {deviceType === "Mobile" && <QuickDial />}
        </FlexBox>
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
