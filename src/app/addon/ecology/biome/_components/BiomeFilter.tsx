import AdjustSlider from "@/components/common/AdjustSlider";
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
import {
  Button,
  ButtonGroup,
  Chip,
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import { FaBoxes, FaCloudRain, FaMountain, FaPercentage, FaTags, FaTemperatureHigh } from "react-icons/fa";
import { FcAnswers, FcFilledFilter } from "react-icons/fc";
import { useBiomeFilter } from "../_hooks/useFilterBiomes";
import FilterItem from "./BiomeFilterItem";

const FilterCategory: FC<PropsWithChildren<{ title: string }>> = (props) => {
  const { title, children } = props;
  return (
    <FlexBox className="flex-col gap-4">
      <Typography className="font-bold">{title}</Typography>
      <FlexBox className="flex-col gap-2">{children}</FlexBox>
    </FlexBox>
  );
};

const BiomeFilter: FC = () => {
  const { temperatureRange, rainfallRange, dimensions, climates, categories, tags, generateRange, allowNullGenerate } =
    useBiomeFilter();
  const { setTemperatureRange, setRainfallRange, setDimensions, setClimates } = useBiomeFilter();
  const { setCategories, setTags, setGenerateRange, setAllowNullGenerate } = useBiomeFilter();
  const [tagHidden, setTagHidden] = useState(true);

  const handleTemperatureRangeChange = (value: [number, number]) => setTemperatureRange(value);
  const handleRainfallRangeChange = (value: [number, number]) => setRainfallRange(value);
  const handleClimateClick = (value: BiomeClimate) =>
    setClimates(climates.includes(value) ? climates.filter((climate) => climate !== value) : [...climates, value]);
  const chooseClimateColor = (climate: BiomeClimate) => {
    switch (climate) {
      case "hot":
        return "error";
      case "warm":
        return "success";
      default:
        return "primary";
    }
  };
  const handleCategoryClick = (value: BiomeCategory) =>
    setCategories(
      categories.includes(value) ? categories.filter((category) => category !== value) : [...categories, value]
    );
  const handleTagClick = (value: BiomeTag) =>
    setTags(tags.includes(value) ? tags.filter((tag) => tag !== value) : [...tags, value]);
  const handleGenerateRangeChange = (value: [number, number]) => setGenerateRange(value);

  const temperatureRangeMarks = [
    {
      value: -17,
      label: "-17°C",
    },
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 40,
      label: "40°C",
    },
  ];

  const rainfallRangeMarks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 20,
      label: "20%",
    },
    {
      value: 40,
      label: "40%",
    },
    {
      value: 60,
      label: "60%",
    },
    {
      value: 80,
      label: "80%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  const generateRangeMarks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 1000,
      label: "10%",
    },
    {
      value: 2000,
      label: "20%",
    },
    {
      value: 2500,
      label: "25%",
    },
  ];

  return (
    <FlexBox className="flex-col justify-between gap-6 w-full">
      <FlexBox className="flex-col gap-4">
        <FlexBox className="items-center gap-2 mb-4">
          <FcFilledFilter size={24} />
          <Typography variant="h6" className="font-bold">
            生物群系过滤
          </Typography>
        </FlexBox>
        <FilterCategory title="主要 (模组指标)">
          <FilterItem label="生态温度" Icon={FaTemperatureHigh} filterState="temperatureRange">
            <AdjustSlider
              size="small"
              min={-17}
              max={40}
              value={temperatureRange}
              valueLabelDisplay="auto"
              marks={temperatureRangeMarks}
              onChange={(_, value) => handleTemperatureRangeChange(value as [number, number])}
            />
            <FlexBox className="gap-2">
              {Object.keys(BiomeClimateCnName).map((climate) => {
                const realClimate = climate as BiomeClimate;
                return (
                  <Chip
                    key={realClimate}
                    label={BiomeClimateCnName[realClimate]}
                    size="small"
                    color={climates.includes(realClimate) ? chooseClimateColor(realClimate) : "default"}
                    onClick={() => handleClimateClick(realClimate)}
                    clickable
                  />
                );
              })}
            </FlexBox>
          </FilterItem>
          <FilterItem label="生态湿度" Icon={FaCloudRain} filterState="rainfallRange">
            <AdjustSlider
              size="small"
              min={0}
              max={100}
              value={rainfallRange}
              valueLabelDisplay="auto"
              marks={rainfallRangeMarks}
              onChange={(_, value) => handleRainfallRangeChange(value as [number, number])}
            />
          </FilterItem>
        </FilterCategory>
        <FilterCategory title="群系 (原版指标)">
          <FilterItem label="生成率(万分之)" Icon={FaPercentage} filterState="generateRange">
            <AdjustSlider
              size="small"
              min={0}
              max={2500}
              step={100}
              value={generateRange}
              valueLabelDisplay="auto"
              marks={generateRangeMarks}
              onChange={(_, value) => handleGenerateRangeChange(value as [number, number])}
            />
            <FormControlLabel
              label="遗弃的生物群系"
              control={<Switch checked={allowNullGenerate} onChange={() => setAllowNullGenerate(!allowNullGenerate)} />}
            />
          </FilterItem>
          <FilterItem label="所属维度" Icon={FaMountain} filterState="dimensions">
            <FlexBox className="gap-2">
              <ToggleButtonGroup value={dimensions} color="primary" onChange={(_, value) => setDimensions(value)}>
                {Object.keys(BiomeDimensionCnName).map((dimension) => {
                  const realDimension = dimension as BiomeDimension;
                  return (
                    <ToggleButton key={realDimension} value={realDimension} size="small">
                      {BiomeDimensionCnName[realDimension]}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            </FlexBox>
          </FilterItem>
          <FilterItem label="群系分类" Icon={FaBoxes} filterState="categories">
            <FlexBox className="gap-2 flex-wrap">
              {Object.keys(BiomeCategoryCnName).map((category) => {
                const realCategory = category as BiomeCategory;
                return (
                  <Chip
                    key={realCategory}
                    label={BiomeCategoryCnName[realCategory]}
                    size="small"
                    color={categories.includes(realCategory) ? "primary" : "default"}
                    onClick={() => handleCategoryClick(realCategory)}
                    clickable
                  />
                );
              })}
            </FlexBox>
            <ButtonGroup variant="text" size="small">
              <Button onClick={() => setCategories([])}>重制</Button>
              <Button onClick={() => setCategories(Object.keys(BiomeCategoryCnName) as Array<BiomeCategory>)}>
                全选
              </Button>
            </ButtonGroup>
          </FilterItem>
          <FilterItem label="群系标签" Icon={FaTags} filterState="tags">
            <FlexBox className={`gap-2 flex-wrap overflow-y-auto ${tagHidden ? "max-h-32" : ""}`}>
              {Object.keys(BiomeTagCnName).map((tag) => {
                const realTag = tag as BiomeTag;
                return (
                  <Chip
                    key={realTag}
                    label={BiomeTagCnName[realTag]}
                    size="small"
                    color={tags.includes(realTag) ? "primary" : "default"}
                    onClick={() => handleTagClick(realTag)}
                    clickable
                  />
                );
              })}
            </FlexBox>
            <ButtonGroup variant="text" size="small">
              <Button onClick={() => setTags([])}>重制</Button>
              <Button onClick={() => setTags(Object.keys(BiomeTagCnName) as Array<BiomeTag>)}>全选</Button>
              <Button onClick={() => setTagHidden(!tagHidden)}>{tagHidden ? "展开" : "收起"}</Button>
            </ButtonGroup>
          </FilterItem>
        </FilterCategory>
      </FlexBox>
      <FlexBox className="gap-2 justify-self-end">
        <FcAnswers size={32} />
        <Typography variant="body2" className="opacity-60">
          修改过滤项将筛选出符合条件的生物群系，默认显示所有
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default BiomeFilter;
