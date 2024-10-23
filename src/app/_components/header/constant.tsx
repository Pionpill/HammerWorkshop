import { ReactElement } from "react";
import {
  MdBook,
  MdDashboard,
  MdDesktopMac,
  MdHome,
  MdOutlineBook,
  MdOutlineDashboard,
  MdOutlineDesktopMac,
  MdOutlineHome,
} from "react-icons/md";

// 一级路由
type PrimaryUrl = "/" | "/addon" | "/wiki" | "/develop";

export const navigationConfig: Array<{
  name: string;
  value: PrimaryUrl;
  defaultIcon: ReactElement;
  activeIcon: ReactElement;
}> = [
  {
    name: "首页",
    value: "/",
    defaultIcon: <MdOutlineHome size="24" />,
    activeIcon: <MdHome size="24" />,
  },
  {
    name: "模组",
    value: "/addon",
    defaultIcon: <MdOutlineDashboard size="24" />,
    activeIcon: <MdDashboard size="24" />,
  },
  {
    name: "文档",
    value: "/wiki",
    defaultIcon: <MdOutlineBook size="24" />,
    activeIcon: <MdBook size="24" />,
  },
  {
    name: "开发",
    value: "/develop",
    defaultIcon: <MdOutlineDesktopMac size="24" />,
    activeIcon: <MdDesktopMac size="24" />,
  },
];
