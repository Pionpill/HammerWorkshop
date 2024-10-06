import FlexBox from "@/components/common/FlexBox";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import { FcEngineering, FcNightLandscape, FcOrgUnit } from "react-icons/fc";

const WikiCard: React.FC = () => {
  const listItems = [
    {
      icon: <FcNightLandscape />,
      title: "美工",
      content: "符合MC风格的像素画: 轮廓，填充，光照，像素化",
    },
    {
      icon: <FcOrgUnit />,
      title: "模型",
      content: "尽可能精致的同时，兼顾MC原版风格与空间优化",
    },
    // {
    //   icon: <FcAbout />,
    //   title: "机制",
    //   content: "模组设计准则，我们是如何在可玩性，数值平衡之间做平衡的",
    // },
    {
      icon: <FcEngineering />,
      title: "代码",
      content: "模组框架与机制的具体算法，更多作为开发成员的备忘文档",
    },
  ];

  return (
    <FlexBox className="sm:max-w-72 sm:w-1/2 flex-col items-center">
      <FlexBox className="flex-col rounded-xl p-4 bg-zinc-100 dark:bg-zinc-800 gap-1 w-full">
        <Link href="/wiki" className="flex flex-col gap-2 items-center">
          <Typography>Wiki 开发文档</Typography>
          <Typography variant="caption" className="opacity-80">
            包含美工，建模，代码的简要准则
          </Typography>
        </Link>
      </FlexBox>
      <Divider sx={{ width: "calc(100% - 1rem)", height: "1px" }} />

      {listItems.map((item, index) => (
        <Fragment key={item.title}>
          <FlexBox className="flex-col items-start rounded-xl py-2 px-4 bg-zinc-100 dark:bg-zinc-800 gap-2 w-full">
            <FlexBox className="items-center gap-2">
              {item.icon}
              <Typography>{item.title}</Typography>
            </FlexBox>
            <Typography variant="body2" className="opacity-60">
              {item.content}
            </Typography>
          </FlexBox>
          {index !== listItems.length - 1 && <Divider sx={{ width: "calc(100% - 1rem)", height: "1px" }} />}
        </Fragment>
      ))}
    </FlexBox>
  );
};

export default WikiCard;
