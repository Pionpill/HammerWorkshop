import { create } from "zustand";

export interface HeadState {
  /** 是否开启导航栏 */
  show: boolean;
}

type HeadAction = {
  /** 开启导航栏 */
  open: () => void;
  /** 关闭导航栏 */
  close: () => void;
};

/** 导航栏钩子 */
const useHeaderStore = create<HeadState & HeadAction>((set) => ({
  show: true,
  open: () => set(() => ({ show: true })),
  close: () => set(() => ({ show: false })),
}));

export default useHeaderStore;
