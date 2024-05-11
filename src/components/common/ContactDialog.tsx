import useDeviceType from "@/hook/common/useDeviceType";
import { Box, Dialog, DialogTitle, IconButton, Typography } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export type ContactDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  titleIcon?: ReactElement;
};

/**
 * 联系弹窗，用于放二维码等
 * 移动端自动占满全屏
 */
const ContactDialog: React.FC<PropsWithChildren<ContactDialogProps>> = (props) => {
  const { open, setOpen, title, titleIcon, children } = props;
  const deviceType = useDeviceType();
  const onClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={onClose} fullScreen={deviceType === "Mobile"}>
      <DialogTitle className="flex justify-between items-center">
        <Box className="flex justify-center items-center gap-2">
          {titleIcon}
          <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: "0.025em" }}>
            {title}
          </Typography>
        </Box>
        <IconButton onClick={() => setOpen(false)}>
          <AiOutlineCloseCircle />
        </IconButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default ContactDialog;
