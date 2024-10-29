import FlexBox from "@/components/common/FlexBox";
import {
  BiomeCategory,
  BiomeCategoryCnName,
  BiomeClimate,
  BiomeClimateCnName,
  BiomeDimension,
  BiomeDimensionCnName,
  BiomeTag,
  BiomeTagCnName,
} from "@/model/ecology/biome";
import { isSameArray } from "@/utils/array.utils";
import { Collapse, IconButton, Typography } from "@mui/material";
import { FC, PropsWithChildren, useMemo, useRef, useState } from "react";
import { IconType } from "react-icons";
import { MdRestartAlt } from "react-icons/md";
import { BiomeFilterState, useBiomeFilter } from "../_hooks/useFilterBiomes";

type FilterItemProps = {
  label: string;
  filterState: keyof BiomeFilterState;
  Icon: IconType;
};

const FilterItem: FC<PropsWithChildren<FilterItemProps>> = (props) => {
  const { label, filterState, Icon, children } = props;
  const [open, setOpen] = useState(false);
  const biomeFilter = useBiomeFilter();
  const defaultState = useRef<number[] | string[]>(biomeFilter[filterState] as number[] | string[]);

  const currentState = biomeFilter[filterState as keyof BiomeFilterState] as number[] | string[];

  const diffTextArray = useMemo(() => {
    if (!defaultState.current) {
      return [];
    }

    const resultArray = [];
    if (!isSameArray(defaultState.current, currentState)) {
      switch (filterState) {
        case "temperatureRange":
          resultArray.push(`温度: ${currentState[0]}°C~${currentState[1]}°C`);
          break;
        case "rainfallRange":
          resultArray.push(`降雨: ${currentState[0]}%~${currentState[1]}%`);
          break;
        case "dimensions":
          resultArray.push(
            `维度: ${currentState
              .map((item) => BiomeDimensionCnName[item as keyof typeof BiomeDimensionCnName])
              .join(", ")}`
          );
          break;
        case "categories":
          resultArray.push(
            `类别: ${currentState
              .map((item) => BiomeCategoryCnName[item as keyof typeof BiomeCategoryCnName])
              .join(", ")}`
          );
          break;
        case "tags":
          resultArray.push(
            `标签: ${currentState.map((item) => BiomeTagCnName[item as keyof typeof BiomeTagCnName]).join(", ")}`
          );
          break;
        case "generateRange":
          resultArray.push(`生成率: ${(currentState[0] as number) / 100}%~${(currentState[1] as number) / 100}%`);
      }
    }
    if (filterState === "temperatureRange" && biomeFilter.climates.length !== 3) {
      resultArray.push(
        `气候: ${biomeFilter.climates
          .map((item) => BiomeClimateCnName[item as keyof typeof BiomeClimateCnName])
          .join(", ")}`
      );
    }
    if (filterState === "generateRange" && biomeFilter.allowNullGenerate) {
      resultArray.push("包括遗弃的生物群系");
    }
    return resultArray;
  }, [biomeFilter]);

  const resetState = (e: MouseEvent) => {
    e.stopPropagation();
    switch (filterState) {
      case "temperatureRange":
        biomeFilter.setTemperatureRange(defaultState.current as [number, number]);
        biomeFilter.setClimates(Object.keys(BiomeClimateCnName) as Array<BiomeClimate>);
        break;
      case "rainfallRange":
        biomeFilter.setRainfallRange(defaultState.current as [number, number]);
        break;
      case "dimensions":
        biomeFilter.setDimensions(defaultState.current as Array<BiomeDimension>);
        break;
      case "categories":
        biomeFilter.setCategories(defaultState.current as Array<BiomeCategory>);
        break;
      case "tags":
        biomeFilter.setTags(defaultState.current as Array<BiomeTag>);
        break;
      case "generateRange":
        biomeFilter.setGenerateRange(defaultState.current as [number, number]);
        biomeFilter.setAllowNullGenerate(false);
    }
  };

  return (
    <FlexBox className="items-start flex-col gap-2">
      <FlexBox className="cursor-pointer w-full items-center justify-between" onClick={() => setOpen(!open)}>
        <FlexBox className={`ml-4 gap-2 items-center ${!open && "opacity-80"}`}>
          <Icon size={16} />
          <Typography>{label}</Typography>
        </FlexBox>
        {diffTextArray.length ? (
          <IconButton size="small" className="opacity-40" onClick={resetState} style={{ padding: 3 }}>
            <MdRestartAlt />
          </IconButton>
        ) : null}
      </FlexBox>
      {!open ? (
        <FlexBox className="flex-col ml-10 opacity-40 gap-1">
          {diffTextArray.map((item) => (
            <Typography variant="body2" key={item}>
              {item}
            </Typography>
          ))}
        </FlexBox>
      ) : null}
      <Collapse in={open} className={`w-full pl-4 ${open && "mb-2"}`}>
        <FlexBox className="grow flex-col w-full pl-4 gap-2">{children}</FlexBox>
      </Collapse>
    </FlexBox>
  );
};

export default FilterItem;
