"use client";
import FlexBox from "@/components/common/FlexBox";
import QuickDial, { QuickDialOperation } from "@/components/common/QuickDial";
import useDeviceType from "@/hook/common/useDeviceType";
import { Drawer } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import BiomeFilter from "./_components/BiomeFilter";

const BiomePage: React.FC<PropsWithChildren> = ({ children }) => {
  const device = useDeviceType();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const operations: QuickDialOperation[] = [
    { label: "侧边栏", Icon: AiOutlineUnorderedList, handleClick: () => setDrawerOpen(!drawerOpen) },
  ];

  return (
    <FlexBox className="h-full w-full">
      {device === "PC" ? (
        <FlexBox className="max-w-64 px-4 py-6 pr-4 bg-secondary h-full overflow-auto">
          <BiomeFilter />
        </FlexBox>
      ) : (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} className="p-6 w-screen">
          <FlexBox className="w-80 p-6 h-screen">
            <BiomeFilter />
          </FlexBox>
        </Drawer>
      )}
      <FlexBox className="flex-grow">123</FlexBox>
      {device === "Mobile" ? <QuickDial extraOperations={operations} /> : null}
    </FlexBox>
  );
};

export default BiomePage;
