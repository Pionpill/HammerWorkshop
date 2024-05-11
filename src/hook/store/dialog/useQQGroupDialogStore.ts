import { create } from "zustand";
import { DialogStore } from "./common";

/** 控制 QQ群聊 弹窗 */
const useQQGroupDialogStore = create<DialogStore>((set) => ({
  show: false,
  open: () => set(() => ({ show: true })),
  close: () => set(() => ({ show: false })),
  toggle: (open?: boolean) =>
    set((state) => {
      const show = open !== undefined ? open : !state.show;
      return { show };
    }),
}));

export default useQQGroupDialogStore;
