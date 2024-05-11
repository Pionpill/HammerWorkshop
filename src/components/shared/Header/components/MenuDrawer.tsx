import CosImage from "@/components/common/CosImage";
import useQQChannelDialogStore from "@/hook/store/dialog/useQQChannelDialogStore";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { RiDiscussFill } from "react-icons/ri";
import { SiTencentqq } from "react-icons/si";
import { navigationConfig } from "../common";

const MenuDrawer: React.FC = () => {
  const openQQGroup = useQQGroupDialogStore((state) => state.open);
  const openQQChannel = useQQChannelDialogStore((state) => state.open);

  const quickOperation = [
    {
      name: "前往项目",
      value: "github",
      icon: <BsGithub size="18" />,
      onClick: () => (globalThis.location.href = "https://github.com/Pionpill/HammerWorkshop"),
    },
    {
      name: "加入我们",
      value: "qq_group",
      icon: <SiTencentqq size="18" />,
      onClick: () => openQQGroup(),
    },
    {
      name: "加入频道",
      value: "qq_channel",
      icon: <RiDiscussFill size="18" />,
      onClick: () => openQQChannel(),
    },
  ];

  return (
    <Box className="min-w-80 h-full p-4">
      <List className="size-full flex flex-col justify-between gap-2">
        <Box>
          <Box className="p-4 py-2">
            <Link href="/">
              <CosImage src="common/imgs/logo.png" alt="HammerWorkshop logo" width="128" height="30" loading="eager" />
            </Link>
          </Box>
          <Box>
            {navigationConfig.map((item) => (
              <Link href={item.value} key={item.value}>
                <ListItemButton>
                  <ListItemIcon>{item.defaultIcon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className="flex gap-4">
          {quickOperation.map((item) => (
            <Button color="inherit" onClick={item.onClick} key={item.value}>
              <Box className="flex flex-col justify-center items-center gap-2">
                {item.icon}
                <Typography className="opacity-80" variant="body2">
                  {item.name}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </List>
    </Box>
  );
};

export default MenuDrawer;
