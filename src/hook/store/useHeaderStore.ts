import { create } from "zustand";

export interface HeadState {
  /** 是否开启导航栏 */
  show: boolean;
  /** 头部logo的cos路径 */
  logo: string;
}

type HeadAction = {
  /** 开启导航栏 */
  open: () => void;
  /** 关闭导航栏 */
  close: () => void;
  /** 设置显示的logo图片地址 */
  changeLogo: (url: string) => void;
};

/** 导航栏钩子 */
const useHeaderStore = create<HeadState & HeadAction>((set) => ({
  show: true,
  logo: "common/imgs/logo.png",
  open: () => set((state) => ({ ...state, show: true })),
  close: () => set((state) => ({ ...state, show: false })),
  changeLogo: (logo) => set((state) => ({ ...state, logo })),
}));

export default useHeaderStore;
