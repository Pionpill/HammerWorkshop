"use client";
import FileTree from "@/components/common/FileTree";
import { FileTreeItemProps } from "@/components/common/FileTree/FileTreeItem";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { FcCollaboration, FcConferenceCall } from "react-icons/fc";
import articleNavigationConfig from "./config";

const AsideMenu: React.FC = () => {
  const tabs = [
    { label: "玩家", value: "player" },
    { label: "开发者", value: "develop" },
  ];

  const [activeTab, setActiveTab] = useState("player");
  const [activeBlog, setActiveBlog] = useState("");

  const changeTab = (_: React.SyntheticEvent, value: string) => {
    setActiveTab(value);
  };

  const formatItem = (item: FileTreeItemProps): FileTreeItemProps => {
    return {
      ...item,
      activeLabel: activeBlog,
      onClick: (label: string) => setActiveBlog(label),
      children: item.children?.map((item) => formatItem(item)),
    };
  };

  const items = articleNavigationConfig.map((item) => formatItem(item));

  return (
    <Box className="w-60 h-full bg-secondary p-4 flex flex-col content-between gap-2">
      <Tabs variant="fullWidth" textColor="inherit" value={activeTab} onChange={changeTab} className="min-h-9">
        {tabs.map((tab) => (
          <Tab
            {...tab}
            className="min-h-9 p-0"
            sx={{
              "&.Mui-selected": { fontWeight: 600 },
            }}
          />
        ))}
      </Tabs>
      <FileTree items={items} className="flex-grow flex-shrink overflow-y-auto overflow-x-hidden" />
      <Box className="flex flex-col gap-1">
        <Box className="flex items-start gap-2 opacity-80">
          {activeTab === "develop" ? (
            <FcConferenceCall size="32" className="min-w-8" />
          ) : (
            <FcCollaboration size="32" className="min-w-8" />
          )}
          <Box className="flex flex-col flex-shrink gap-1">
            <Typography className="font-bold">{activeTab === "develop" ? "开发规范" : "机制指南"}</Typography>
            <Typography variant="caption" className="opacity-80">
              {activeTab === "develop"
                ? "锤子工坊统一开发规范，请严格按照各文档操作"
                : "帮您更好地了解锤子工坊的一些设计原则与游戏机制"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AsideMenu;
