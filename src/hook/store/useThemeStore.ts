"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/** 用户个性化状态 */
export interface ThemeState {
  /** 主题色 */
  theme: "dark" | "light";
  /** 使用系统色 */
  system: boolean;
}

type ThemeAction = {
  /** 切换主题色 */
  switchTheme: (newTheme?: ThemeState["theme"]) => void;
  /** 使用系统色 */
  switchSystem: (system?: boolean) => void;
};

const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set) => ({
      theme: "light",
      system: true,
      switchSystem: (system) =>
        set((state) => ({
          theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
          system: system || !state.system,
        })),
      switchTheme: (newTheme) =>
        set((state) => ({
          theme: newTheme || (state.theme === "dark" ? "light" : "dark"),
          system: false,
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;

/**
 * 主题选择器，根据主题色返回对应内容
 * @param light 浅色主题内容
 * @param dark 深色主题内容
 * @returns 当前主题下的内容
 */
export const useThemeSelector = <T>(light: T, dark: T) => {
  return useThemeStore((state) => state.theme) === "light" ? light : dark;
};
