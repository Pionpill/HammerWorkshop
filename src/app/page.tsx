"use client";
import FlexBox from "@/components/common/FlexBox";
import useQQGroupDialogStore from "@/hook/store/dialog/useQQGroupDialogStore";
import { useThemeSelector } from "@/hook/store/useThemeStore";
import { Button, Typography } from "@mui/material";

import React, { PropsWithChildren } from "react";
import { FaQq } from "react-icons/fa";
import AddonCard from "./components/AddonCard";
import GalleryCard from "./components/GalleryCard";
import JoinCard from "./components/JoinCard";
import MemberCard from "./components/MemberCard";
import NoticeCard, { NoticeCardProps } from "./components/NoticeCard";
import HomeTitle from "./components/RainbowTitle";
import WikiCard from "./components/WikiCard";

const Home: React.FC<PropsWithChildren> = ({ children }) => {
  const openQQGroup = useQQGroupDialogStore((state) => state.open);

  const bgImgStyle = useThemeSelector(
    `linear-gradient( rgba(0, 0, 0, 0) 10%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.98) 90%, rgba(255, 255, 255, 1) 100%), url("https://hammerwokshop-1316521854.cos.ap-shanghai.myqcloud.com/website%2Fgarllery%2Fbadland.png")`,
    `linear-gradient( rgba(255, 255, 255, 0) 10%, rgba(21, 21, 21, 0.5) 50%, rgba(21, 21, 21, 0.98) 90%, rgba(21, 21, 21, 1) 100%), url("https://hammerwokshop-1316521854.cos.ap-shanghai.myqcloud.com/website/garllery/village.png")`
  );
  const buttonBgStyle = useThemeSelector(
    "linear-gradient(to right top, #0b1a4e, #0c1f4e, #0f244e, #14284d, #192c4c, #232b4a, #2b2a48, #322946, #3e223d, #461a30, #491521, #461510)",
    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
  );

  const noticeInfos: NoticeCardProps[] = [
    {
      title: "中国版（网易）",
      context: [
        "在网易代理的中国版Minecraft，我们已上架了多款作品",
        "目前主要开发'生态'模组，上架的两次测试版分别获得 10w+ 与 5w+ 下载量",
      ],
    },
    {
      title: "国际版（微软）",
      context: [
        "由于微软在2023年才发布SDK(开发工具)，目前逐渐稳定",
        "我们计划在'生态'模组1.3版本之后主力转为国际版开发",
      ],
    },
  ];

  return (
    <FlexBox className={"flex-1 flex-col items-center overflow-hidden"}>
      <FlexBox className={"w-full justify-center bg-cover"} sx={{ background: bgImgStyle }}>
        <FlexBox className={"p-8 h-full w-full max-w-7xl flex-wrap gap-16 backdrop-blur-sm sm:px-4 sm:py-16"}>
          <FlexBox className="flex-col gap-12 flex-1 basis-96 sm:py-12">
            <Typography>Hello 这里是</Typography>
            <HomeTitle>锤子工坊</HomeTitle>
            <FlexBox className="flex-col">
              <Typography className="opacity-80">
                一个业余玩家组成的
                <span className="font-bold"> 我的世界 </span>
                开发团队，发布作品总下载量已超<span className="font-bold">50w</span>
                ，目前专注于中国版（网易代理）和国际版（微软）开发。
              </Typography>
              <Typography className="opacity-80">
                如果你想和社区的玩家联机游戏，加入我们团队，或向我们反馈一些Addon问题，请通过下方按钮联系我们
              </Typography>
            </FlexBox>
            <FlexBox className="mt-4">
              <Button
                sx={{ backgroundImage: buttonBgStyle }}
                className="opacity-80 hover:opacity-100 transition-all px-6"
                startIcon={<FaQq size="16" />}
                variant="contained"
                onClick={openQQGroup}
              >
                加入我们
              </Button>
            </FlexBox>
            <FlexBox className="gap-8 mt-8">
              {noticeInfos.map((info) => (
                <NoticeCard title={info.title} context={info.context} />
              ))}
            </FlexBox>
          </FlexBox>
          <FlexBox
            className="flex-1 flex-col flex-wrap basis-96 justify-center gap-8 sm:gap-4"
            sx={{
              "@media(min-width: 600px)": {
                maxHeight: "700px",
              },
            }}
          >
            <AddonCard />
            <WikiCard />
            <GalleryCard />
            <JoinCard />
            <MemberCard />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
