"use client";
import useThemeStore from "@/hook/store/useThemeStore";
import { Box, Button, ButtonGroup, List, Typography } from "@mui/material";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";

const UserDrawer: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);
  const system = useThemeStore((state) => state.system);
  const switchTheme = useThemeStore((state) => state.switchTheme);
  const switchSystem = useThemeStore((state) => state.switchSystem);

  const themeConfig = [
    {
      icon: <BiSun />,
      label: "light",
      onClick: () => switchTheme("light"),
      active: !system && theme === "light",
    },
    {
      icon: <BsDisplay />,
      label: "system",
      onClick: () => switchSystem(),
      active: system,
    },
    {
      icon: <BiMoon />,
      label: "dark",
      onClick: () => switchTheme("dark"),
      active: !system && theme === "dark",
    },
  ];

  return (
    <Box className="min-w-80 h-full p-4">
      <List className="size-full flex flex-col justify-between gap-2">
        <Box>
          <ButtonGroup>
            {themeConfig.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "contained" : "outlined"}
                startIcon={item.icon}
                onClick={item.onClick}
              >
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Typography variant="caption" className="opacity-60">
          这些样式配置会被保留在您的浏览器中
        </Typography>
      </List>
    </Box>
  );
};

export default UserDrawer;
