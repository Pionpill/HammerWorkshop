"use client";
import { Theme, createTheme } from "@mui/material/styles";

export const commonTheme: Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          ":root": {
            boxSizing: "border-box",
          },
          "*, ::before, ::after": {
            boxSizing: "inherit",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.2,
    },
    caption: {
      lineHeight: 1.2,
    },
  },
  breakpoints: {
    // 保持 md 及以下与 tailwindcss 一致
    values: {
      xs: 0,
      sm: 640,
      md: 768, // 移动端临界值
      lg: 1280,
      xl: 1920,
    },
  },
});

export const lightTheme: Theme = createTheme(
  Object.assign(commonTheme, {
    palette: {
      mode: "light",
      background: {
        primary: "#ffffff",
        secondary: "#f3f3f3",
        thirdly: "#ececec",
      },
    },
  })
);

export const darkTheme: Theme = createTheme(
  Object.assign(commonTheme, {
    palette: {
      mode: "dark",
      background: {
        primary: "#1e1e1e",
        secondary: "#252525",
        thirdly: "#2d2d2d",
      },
    },
  })
);
