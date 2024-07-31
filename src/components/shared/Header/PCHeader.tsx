import CosImage from "@/components/common/CosImage";
import FlexBox from "@/components/common/FlexBox";
import SplitButton from "@/components/common/SplitButton";
import useQQChannelDialogStore from "@/hook/store/dialog/useQQChannelDialogStore";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import useHeaderStore from "@/hook/store/useHeaderStore";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { RiDiscussFill, RiQqFill } from "react-icons/ri";
import { navigationConfig } from "./common";

const PCHeader: React.FC = () => {
  const openQQGroup = useQQGroupDialogStore((state) => state.open);
  const openQQChannel = useQQChannelDialogStore((state) => state.open);
  const logoUrl = useHeaderStore((state) => state.logo);

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
      onClick: () => window.open("https://github.com/Pionpill/HammerWorkshop"),
    },
  ];

  return (
    <FlexBox className="sticky top-0 z-50 h-12 flex justify-between items-center bg-slate-950 p-1 pl-4 pr-4">
      <CosImage src={logoUrl} alt="HammerWorkshop logo" width="100" height="20" loading="eager" />
      <FlexBox className="flex flex-row gap-4 text-white">
        {navigationConfig.map((item) => (
          <Link href={item.value} key={item.value}>
            <Typography className="font-semibold tracking-widest opacity-80 hover:opacity-100">{item.name}</Typography>
          </Link>
        ))}
      </FlexBox>
      <FlexBox className="flex gap-1">
        <IconButton size="small" onClick={() => switchTheme()}>
          {themeIcon}
        </IconButton>
        <SplitButton groupProps={{ size: "small" }} buttonsProps={contactConfig} replace />
      </FlexBox>
    </FlexBox>
  );
};

export default PCHeader;
