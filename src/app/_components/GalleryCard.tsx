import FlexBox from "@/components/common/FlexBox";
import { Typography } from "@mui/material";
import Link from "next/link";
import { SlArrowRightCircle } from "react-icons/sl";

const GalleryCard: React.FC = () => {
  const bgImgStyle = 'url("https://hammerwokshop-1316521854.cos.ap-shanghai.myqcloud.com/website/garllery/attic.png")';

  return (
    <FlexBox
      sx={{ background: bgImgStyle }}
      className="sm:max-w-72 sm:w-1/2 rounded-xl p-4 flex-col h-40 bg-cover justify-between"
    >
      <Typography variant="caption" className="opacity-60 text-white">
        作者：纸鹤，梦想
      </Typography>
      <FlexBox className="justify-between items-center">
        <Typography className="text-white">
          历代作品
          <br />
          画廊
        </Typography>
        <Link href="/garllery">
          <SlArrowRightCircle className="text-white" />
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default GalleryCard;
