import useSnackbarAlert from "@/hook/store/useGlobalSnackbar";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function GlobalSnackbarAlert() {
  const open = useSnackbarAlert((state) => state.show);
  const severity = useSnackbarAlert((state) => state.severity);
  const content = useSnackbarAlert((state) => state.content);
  const closeSnackbar = useSnackbarAlert((state) => state.closeSnackbar);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
      <Alert onClose={closeSnackbar} severity={severity} variant="filled" sx={{ width: "100%" }}>
        {content}
      </Alert>
    </Snackbar>
  );
}
