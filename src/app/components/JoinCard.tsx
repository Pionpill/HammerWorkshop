import FlexBox from "@/components/common/FlexBox";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import { Button, Typography } from "@mui/material";

const JoinCard: React.FC = () => {
  const openQQGroup = useQQGroupDialogStore((state) => state.open);

  return (
    <FlexBox className="flex-col sm:max-w-72 sm:w-1/2 rounded-xl p-4 bg-gradient-to-tr from-orange-200 dark:from-orange-900 to-purple-200 dark:to-purple-900 gap-12">
      <FlexBox className="justify-between">
        <Button onClick={openQQGroup} className="opacity-80">
          成为我们的一员
        </Button>
      </FlexBox>
      <FlexBox className="flex-col">
        <Typography variant="caption">· 业余团队，下班/下课空闲即可</Typography>
        <Typography variant="caption">· 为爱发电/赚零花钱</Typography>
        <Typography variant="caption">· 目前正处于缺人阶段</Typography>
        <Typography variant="caption">· 有收益</Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default JoinCard;
