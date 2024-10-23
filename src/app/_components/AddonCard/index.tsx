import CosImage from "@/components/common/CosImage";
import FlexBox from "@/components/common/FlexBox";
import { Typography } from "@mui/material";
import Link from "next/link";

const AddonCard: React.FC = () => {
  return (
    <FlexBox className="sm:max-w-72 sm:w-1/2 rounded-xl p-6 bg-slate-800 dark:bg-slate-900 text-white items-center flex-col relative gap-4">
      <Link href="/addon">
        <FlexBox className="absolute -top-2 left-1/2 bg-teal-500 w-4 h-4 rounded-full animate-ping" />
        <FlexBox className="absolute -top-2 left-1/2 bg-teal-500 w-4 h-4 rounded-full " />
        <FlexBox className="flex-col gap-2 items-center">
          <Typography>了解我们的模组</Typography>
          <Typography variant="caption" className="opacity-80">
            可视化指南，详细机制说明
          </Typography>
        </FlexBox>
        <FlexBox className="gap-4 justify-center p-3">
          <CosImage src="ecology/items/eggplant.png" alt="item" width="25" height="25" />
          {/* <FlexBox className="w-12 h-12">
            <AddonModal modelPath="https://hammerwokshop-1316521854.cos.ap-shanghai.myqcloud.com/ecology/model/cooking_table/cooking_table.gltf" />
          </FlexBox> */}
          <CosImage src="ecology/items/tomato.png" alt="item" width="25" height="25" />
        </FlexBox>
        <Typography variant="caption" className="opacity-60">
          目前只做了一个模组，哈哈😅
        </Typography>
      </Link>
    </FlexBox>
  );
};

export default AddonCard;
