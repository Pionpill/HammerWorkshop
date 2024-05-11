import CosImage from "@/components/common/CosImage";
import SplitButton from "@/components/common/SplitButton";
import useQQChannelDialogStore from "@/hook/store/dialog/useQQChannelDialogStore";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { RiDiscussFill, RiQqFill } from "react-icons/ri";
import { navigationConfig } from "./common";

const PCHeader: React.FC = () => {
  const openQQGroup = useQQGroupDialogStore((state) => state.open);
  const openQQChannel = useQQChannelDialogStore((state) => state.open);

  const themeIcon = useThemeSelector(<BiSun color="white" />, <BiMoon color="white" />);
  const switchTheme = useThemeStore((state) => state.switchTheme);

  const contactConfig = [
    {
      value: "qq_group",
      children: "加入我们",
      startIcon: <RiQqFill size="18" />,
      onClick: () => openQQGroup(),
    },
    {
      value: "qq_channel",
      children: "加入频道",
      startIcon: <RiDiscussFill size="18" />,
      onClick: () => openQQChannel(),
    },
    {
      value: "github",
      children: "前往项目",
      startIcon: <BsGithub size="18" />,
      onClick: () => (globalThis.location.href = "https://github.com/Pionpill/HammerWorkshop"),
    },
  ];

  return (
    <Box className="h-12 flex justify-between items-center bg-slate-950 p-1 pl-4 pr-4">
      <CosImage src="common/imgs/logo.png" alt="HammerWorkshop logo" width="100" height="20" loading="eager" />
      <Box className="flex flex-row gap-4 text-white">
        {navigationConfig.map((item) => (
          <Link href={item.value} key={item.value}>
            <Typography className="font-semibold tracking-widest opacity-80 hover:opacity-100">{item.name}</Typography>
          </Link>
        ))}
      </Box>
      <Box className="flex gap-1">
        <IconButton size="small" onClick={() => switchTheme()}>
          {themeIcon}
        </IconButton>
        <SplitButton groupProps={{ size: "small" }} buttonsProps={contactConfig} replace />
      </Box>
    </Box>
  );
};

export default PCHeader;