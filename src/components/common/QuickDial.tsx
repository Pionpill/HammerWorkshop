"use client";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { BsFillMoonStarsFill, BsFillSunFill, BsLink45Deg } from "react-icons/bs";

export type SpeedDialOperation = {
  label: string;
  Icon: IconType;
  handleClick: (e?: MouseEvent) => void;
};

type QuickDialProps = {
  extraOperations?: SpeedDialOperation[];
  useDefaultOperations?: boolean;
  className?: string;
};

const QuickDial: React.FC<QuickDialProps> = (props) => {
  const { className, extraOperations, useDefaultOperations } = props;

  const themeIcon = useThemeSelector(BsFillSunFill, BsFillMoonStarsFill);
  const switchTheme = useThemeStore((state) => state.switchTheme);

  const copyLink = () => {
    const url = globalThis.location.href;
    navigator.clipboard.writeText(url);
  };

  const operations = useMemo(() => {
    const defaultOperations: SpeedDialOperation[] = [
      { Icon: themeIcon, label: "主题色", handleClick: () => switchTheme() },
      { Icon: BsLink45Deg, label: "复制链接", handleClick: () => copyLink() },
    ];
    return useDefaultOperations
      ? extraOperations
        ? [...defaultOperations, ...extraOperations]
        : defaultOperations
      : extraOperations || [];
  }, [useDefaultOperations, extraOperations]);

  return (
    <SpeedDial className={`absolute bottom-20 right-4 ${className}`} ariaLabel="快捷操作" icon={<SpeedDialIcon />}>
      {operations.map((action) => (
        <SpeedDialAction
          key={action.label}
          icon={<action.Icon />}
          tooltipOpen
          tooltipTitle={action.label}
          onClick={(e) => action.handleClick}
        />
      ))}
    </SpeedDial>
  );
};

export default QuickDial;
