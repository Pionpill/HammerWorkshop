"use client";
import useSpeedDialStore from "@/hook/store/useSpeedDialStore";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { BsFillMoonStarsFill, BsFillSunFill, BsLink45Deg } from "react-icons/bs";

const QuickDial: React.FC = () => {
  const themeIcon = useThemeSelector(<BsFillSunFill />, <BsFillMoonStarsFill />);
  const switchTheme = useThemeStore((state) => state.switchTheme);
  const open = useSpeedDialStore((state) => state.show);

  const copyLink = () => {
    const url = globalThis.location.href;
    navigator.clipboard.writeText(url);
  };

  const commonQuickDialActions = [
    { icon: themeIcon, name: "主题色", onClick: () => switchTheme() },
    { icon: <BsLink45Deg />, name: "复制链接", onClick: () => copyLink() },
  ];

  // TODO 为不同界面提供特定的的 action，使用 useSpeedDial 钩子实现
  const quickDialActions = commonQuickDialActions;

  return (
    <SpeedDial className="absolute bottom-20 right-4" hidden={!open} ariaLabel="快捷操作" icon={<SpeedDialIcon />}>
      {quickDialActions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipOpen
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default QuickDial;
