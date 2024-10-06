import CosImage from "@/components/common/CosImage";
import FlexBox from "@/components/common/FlexBox";
import { Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { AiFillGithub, AiFillQqCircle } from "react-icons/ai";

const Addon: React.FC = () => {
  return (
    <FlexBox className="flex-col gap-8">
      <FlexBox className="gap-16 sm:gap-8 flex-wrap items-center justify-center p-6 sm:flex-row-reverse">
        <FlexBox>
          <CosImage src="ecology/imgs/ecology-banner.png" width="600" height="25" alt="ecology-banner" />
        </FlexBox>
        <FlexBox className="flex-col gap-10" sx={{ maxWidth: "500px" }}>
          <FlexBox className="flex-col gap-6">
            <FlexBox className="gap-4">
              <Typography variant="h2" className="text-emerald-600" sx={{ textShadow: `1px 1px 5px #333` }}>
                Ecology
              </Typography>
              <Typography variant="h2">生态</Typography>
            </FlexBox>
            <Typography variant="h6" className="opacity-60">
              体验不同生态环境下的种田体验，了解作物的生长习性，烹饪百余种丰盛食物
            </Typography>
          </FlexBox>
          <FlexBox className="gap-8">
            <Button variant="contained">
              <Link href="/addon/ecology">了解更多</Link>
            </Button>
            <FlexBox>
              <IconButton>
                <AiFillGithub />
              </IconButton>
              <IconButton>
                <AiFillQqCircle />
              </IconButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <FlexBox>生态系统</FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Addon;
