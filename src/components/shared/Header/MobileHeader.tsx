import CosImage from "@/components/common/CosImage";
import useThemeStore, { useThemeSelector } from "@/hook/store/useThemeStore";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiMoon, BiPalette, BiSun } from "react-icons/bi";
import MenuDrawer from "./components/MenuDrawer";
import UserDrawer from "./components/UserDrawer";

const MobileHeader: React.FC = () => {
  const themeIcon = useThemeSelector(<BiSun color="white" />, <BiMoon color="white" />);
  const switchTheme = useThemeStore((state) => state.switchTheme);

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (open?: boolean) => setOpenMenu(open !== undefined ? !!open : !openMenu);
  const [openUser, setOpenUser] = useState(false);
  const toggleUser = (open?: boolean) => setOpenUser(open !== undefined ? !!open : !openUser);

  return (
    <>
      <Box className="h-12 flex justify-between items-center bg-slate-950 p-1 pl-4 pr-4">
        <IconButton size="small" onClick={() => toggleMenu()}>
          <AiOutlineMenuUnfold color="white" />
        </IconButton>
        <CosImage src="common/imgs/logo.png" alt="HammerWorkshop logo" width="100" height="20" loading="eager" />
        <Box className="flex gap-1">
          <IconButton size="small" onClick={() => switchTheme()}>
            {themeIcon}
          </IconButton>
          <IconButton size="small" onClick={() => toggleUser()}>
            <BiPalette color="white" />
          </IconButton>
        </Box>
      </Box>
      <Drawer className="w-screen" open={openMenu} onClose={() => toggleMenu()}>
        <MenuDrawer />
      </Drawer>
      <Drawer anchor="right" className="w-screen" open={openUser} onClose={() => toggleUser()}>
        <UserDrawer />
      </Drawer>
    </>
  );
};

export default MobileHeader;
