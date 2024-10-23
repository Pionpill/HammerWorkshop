import ContactDialog from "@/components/common/ContactDialog";
import QrCode from "@/components/common/QrCode";
import useQQChannelDialogStore from "@/hook/store/dialog/useQQChannelDialogStore";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import useSnackbarAlert from "@/hook/store/useGlobalSnackbar";
import QQContact, { QQType } from "@/model/contact/QQContact";
import { globalUtils } from "@/utils/global";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { AiFillQqCircle, AiOutlineCopy } from "react-icons/ai";
import { RiQqLine } from "react-icons/ri";

const QQDialog: React.FC<{ contact: Pick<QQContact, "id" | "name" | "link" | "type"> }> = ({ contact }) => {
  const { id, name, link, type } = contact;
  const qqContact = new QQContact(id, name, link, type);

  const openGlobalSnackbar = useSnackbarAlert((state) => state.openSnackbar);
  // 在条件语句中使用了钩子，但 type 是属性，永远不会变
  const useQQDialogStore = type === QQType.GROUP ? useQQGroupDialogStore : useQQChannelDialogStore;
  const showDialog = useQQDialogStore((state) => state.show);
  const toggleDialog = useQQDialogStore((state) => state.toggle);

  const copyQQId = () => {
    globalUtils
      .copyToClipboard(qqContact.id.toString())
      .then(() => openGlobalSnackbar(`已将${qqContact.typeLabel}复制到剪切板`));
  };

  const quickLinkConfig = [
    {
      icon: <RiQqLine size="24" />,
      label: "打开QQ",
      click: qqContact.jumpTo,
    },
    {
      icon: <AiOutlineCopy size="24" />,
      label: "复制链接",
      click: copyQQId,
    },
  ];

  return (
    <ContactDialog
      open={showDialog}
      setOpen={toggleDialog}
      title={`QQ${qqContact.typeLabel}`}
      titleIcon={<AiFillQqCircle size="24" color="#0052d9" />}
    >
      <Box className="size-full flex flex-col gap-4 items-center justify-center p-0 sm:p-8">
        <Box className="flex flex-col gap-8 p-8 rounded-xl bg-secondary">
          <Box className="flex items-center gap-4 rounded">
            <Image src={qqContact.iconUrl} alt="HammerWorkshop logo" width="48" height="48" className="rounded-full" />
            <Box className="flex flex-col">
              <Typography>{qqContact.name}</Typography>
              <Box className="flex gap-1 items-center opacity-60">
                <Typography variant="body2">{`群号: ${qqContact.id}`}</Typography>
                <IconButton size="small" onClick={copyQQId}>
                  <AiOutlineCopy size="14" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <QrCode value={qqContact.link} />
        </Box>
        <Typography variant="caption">扫一扫二维码，加入群聊</Typography>
        <Box className="flex flex-col gap-4 mt-6">
          <Box className="flex gap-4 justify-center">
            {quickLinkConfig.map((item) => (
              <Button color="inherit" onClick={item.click} key={item.label}>
                <Box className="flex flex-col items-center gap-2">
                  {item.icon}
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </ContactDialog>
  );
};

export default QQDialog;
