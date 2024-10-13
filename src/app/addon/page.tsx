import CosImage from "@/components/common/CosImage";
import FlexBox from "@/components/common/FlexBox";
import { Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { AiFillGithub, AiFillQqCircle, AiOutlineDropbox } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import main from "./temp";

const AddonPage: React.FC = () => {
  const subSystems = [
    {
      label: "生态系统",
      content: "以群系为基础，考虑时间，海拔，光照等环境因素，动态获取生态数据来影响作物的生长。",
      subContent: "未来将提供改变环境的手段；影响物品腐败，烹饪环境。",
      icon: FaTemperatureLow,
    },
    {
      label: "作物系统",
      content: "完全重写原版作物生长逻辑，你无法在雪山与荒漠种植多数作物，耕耘必须考虑生态环境。",
      subContent: "未来将提供更丰富的作物类别(现有40+作物)",
      icon: RiPlantFill,
    },
    {
      label: "工作台系统",
      content: "完全复刻原版工作功能，提供更灵活的合成手段，按类别判定原材料。",
      subContent: "正在开发一键合成功能。",
      icon: AiOutlineDropbox,
    },
  ];

  main();

  return (
    <FlexBox className="flex-col gap-12 my-6">
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
      <FlexBox className="w-full max-w-7xl flex-wrap gap-4 px-6">
        {subSystems.map((item) => (
          <FlexBox className="p-8 flex-col items-center gap-4 flex-1 basis-96 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {item.label}
            </Typography>
            <Typography className="text-center">{item.content}</Typography>
            <Typography variant="caption" className="text-center opacity-80">
              {item.subContent}
            </Typography>
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default AddonPage;
