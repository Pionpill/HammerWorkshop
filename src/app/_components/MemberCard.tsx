import FlexBox from "@/components/common/FlexBox";
import { Typography } from "@mui/material";
import Image from "next/image";

const MemberCard: React.FC = () => {
  const members = [
    {
      iconSrc: "https://avatars.githubusercontent.com/u/70939356?s=128&v=4",
      name: "北岸(负责人)",
      onClick: () => window.open("https://pionpill.github.io/"),
      dec: "程序员社畜，下班写项目整点新花活",
    },
    {
      name: "纸某大学生",
      dec: "打游戏红温了，BlockBench 启动！",
    },
    {
      name: "久某大学生",
      dec: "学习Python/Typescript的好机会",
    },
    {
      name: "某打工人",
      dec: "上班闲的时候手机画点像素画玩玩",
    },
  ];

  return (
    <FlexBox className="flex-col sm:max-w-72 sm:w-1/2 rounded-xl p-4 bg-zinc-100 dark:bg-zinc-800 gap-2">
      <Typography variant="caption">我们的成员</Typography>
      {members.map((item) => (
        <FlexBox key={item.name} className={`gap-2 ${item.onClick && "cursor-pointer"}`} onClick={item.onClick}>
          {item.iconSrc ? (
            <FlexBox className="bg-zinc-200 dark:bg-zinc-700 w-10 h-10 rounded-md items-center justify-center">
              <Image src={item.iconSrc} alt={`${item.name} logo`} width="48" height="48" className="rounded-md" />
            </FlexBox>
          ) : (
            <FlexBox className="bg-zinc-200 dark:bg-zinc-700 w-10 h-10 rounded-md items-center justify-center">
              {item.name[0]}
            </FlexBox>
          )}
          <FlexBox className="flex-col gap-1">
            <Typography variant="body2">{item.name}</Typography>
            <Typography variant="caption" className="opacity-60">
              {item.dec}
            </Typography>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default MemberCard;
