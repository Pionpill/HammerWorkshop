import { create } from "zustand";

export interface SpeedDialState {
  /** 是否开启 */
  show: boolean;
}

type SpeedDialAction = {
  /** 开启speedDial */
  open: () => void;
  /** 关闭speedDial */
  close: () => void;
};

/** speedDial 钩子 */
const useSpeedDialStore = create<SpeedDialState & SpeedDialAction>((set) => ({
  show: true,
  open: () => set(() => ({ show: true })),
  close: () => set(() => ({ show: false })),
}));

export default useSpeedDialStore;
