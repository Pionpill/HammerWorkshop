import FlexBox from "@/components/common/FlexBox";
import { Divider, Typography } from "@mui/material";
import { FcRating } from "react-icons/fc";

export type NoticeCardProps = {
  title: string;
  context: string | string[];
};

const NoticeCard: React.FC<NoticeCardProps> = ({ title, context }) => {
  const realContext = Array.isArray(context) ? context : [context];
  return (
    <FlexBox className="flex-col gap-4 flex-1">
      <FlexBox className="items-center gap-2">
        <FcRating />
        <Divider className="flex flex-grow" />
      </FlexBox>
      <Typography className="font-bold">{title}</Typography>
      <FlexBox className="flex-col">
        {realContext.map((item) => (
          <Typography key={item} variant="caption" className="opacity-60 inline-block w-full">
            {item}
          </Typography>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default NoticeCard;
