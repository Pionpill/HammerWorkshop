"use client";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { BiLink } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export type QuickDialOperation = {
  label: string;
  Icon: IconType;
  handleClick: () => void;
};

type QuickDialProps = {
  extraOperations?: QuickDialOperation[];
  useDefaultOperations?: boolean;
  className?: string;
};

const QuickDial: React.FC<QuickDialProps> = (props) => {
  const { className, extraOperations = [], useDefaultOperations = true } = props;

  const themeIcon = useThemeSelector(BsFillSunFill, BsFillMoonStarsFill);
  const switchTheme = useThemeStore((state) => state.switchTheme);

  const copyLink = () => {
    const url = globalThis.location.href;
    navigator.clipboard.writeText(url);
  };

  const operations = useMemo(() => {
    const defaultOperations: QuickDialOperation[] = [
      { Icon: themeIcon, label: "主题色", handleClick: () => switchTheme() },
      { Icon: BiLink, label: "复制链接", handleClick: () => copyLink() },
    ];
    return useDefaultOperations ? [...defaultOperations, ...extraOperations] : extraOperations;
  }, [useDefaultOperations, extraOperations]);

  return (
    <SpeedDial className={`absolute bottom-6 right-6 ${className}`} ariaLabel="快捷操作" icon={<SpeedDialIcon />}>
      {operations.map((action) => (
        <SpeedDialAction
          key={action.label}
          icon={<action.Icon />}
          tooltipOpen
          tooltipTitle={action.label}
          onClick={action.handleClick}
        />
      ))}
    </SpeedDial>
  );
};

export default QuickDial;
