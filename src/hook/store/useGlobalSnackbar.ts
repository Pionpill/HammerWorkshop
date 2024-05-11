import { AlertColor } from "@mui/material";
import { ReactElement } from "react";
import { create } from "zustand";

export interface GlobalSnackbarState {
  show: boolean;
  severity: AlertColor;
  content: string | ReactElement;
}

type GlobalSnackbarAction = {
  openSnackbar: (content: string | ReactElement, severity?: AlertColor) => void;
  closeSnackbar: () => void;
};

const useGlobalSnackbar = create<GlobalSnackbarState & GlobalSnackbarAction>((set) => ({
  show: false,
  severity: "success" as AlertColor,
  content: "",
  openSnackbar: (content, severity) => set(() => ({ show: true, content, severity: severity || "success" })),
  closeSnackbar: () => set((state) => ({ show: false, severity: "success", content: "" })),
}));

export default useGlobalSnackbar;
