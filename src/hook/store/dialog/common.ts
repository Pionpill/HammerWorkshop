export interface DialogState {
  show: boolean;
}

export interface DialogAction {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface DialogStore extends DialogState, DialogAction {}
