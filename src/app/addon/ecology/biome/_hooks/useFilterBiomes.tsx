import useBiomes from "@/hook/db/useBiome";
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
import { between } from "@/utils/math.utils";
import { useMemo } from "react";
import { create } from "zustand";

export type BiomeFilterState = {
  temperatureRange: [number, number];
  rainfallRange: [number, number];
  dimensions: Array<BiomeDimension>;
  climates: Array<BiomeClimate>;
  categories: Array<BiomeCategory>;
  tags: Array<BiomeTag>;
  generateRange: [number, number];
  allowNullGenerate: boolean;
};

export type BiomeFilterAction = {
  setTemperatureRange: (range: [number, number]) => void;
  setRainfallRange: (range: [number, number]) => void;
  setDimensions: (dimensions: Array<BiomeDimension>) => void;
  setClimates: (dimensions: Array<BiomeClimate>) => void;
  setCategories: (dimensions: Array<BiomeCategory>) => void;
  setTags: (dimensions: Array<BiomeTag>) => void;
  setGenerateRange: (range: [number, number]) => void;
  setAllowNullGenerate: (allow: boolean) => void;
};

export const useBiomeFilter = create<BiomeFilterState & BiomeFilterAction>((set) => ({
  temperatureRange: [-17, 40],
  rainfallRange: [0, 100],
  dimensions: Object.keys(BiomeDimensionCnName) as Array<BiomeDimension>,
  climates: Object.keys(BiomeClimateCnName) as Array<BiomeClimate>,
  categories: Object.keys(BiomeCategoryCnName) as Array<BiomeCategory>,
  tags: Object.keys(BiomeTagCnName) as Array<BiomeTag>,
  generateRange: [0, 2500],
  allowNullGenerate: false,
  setTemperatureRange: (temperatureRange) => set((state) => ({ ...state, temperatureRange })),
  setRainfallRange: (rainfallRange) => set((state) => ({ ...state, rainfallRange })),
  setDimensions: (dimensions) => set((state) => ({ ...state, dimensions })),
  setClimates: (climates) => set((state) => ({ ...state, climates })),
  setCategories: (categories) => set((state) => ({ ...state, categories })),
  setTags: (tags) => set((state) => ({ ...state, tags })),
  setGenerateRange: (generateRange) => set((state) => ({ ...state, generateRange })),
  setAllowNullGenerate: (allowNullGenerate) => set((state) => ({ ...state, allowNullGenerate })),
}));

const useFilterBiomes = () => {
  const biomes = useBiomes();
  const biomeFilter = useBiomeFilter();
  return useMemo(
    () =>
      biomes
        ? biomes.filter((biome) => {
            const { temperature, rainfall, dimension, climate, category, tags, generate } = biome;
            const {
              temperatureRange,
              rainfallRange,
              generateRange,
              allowNullGenerate,
              dimensions,
              climates,
              categories,
            } = biomeFilter;
            return between(temperature, temperatureRange) &&
              between(rainfall, rainfallRange) &&
              dimensions.includes(dimension) &&
              climates.includes(climate) &&
              categories.includes(category) &&
              tags.some((tag) => tags.includes(tag)) &&
              generate !== null
              ? between(generate, generateRange)
              : allowNullGenerate || dimension !== "overworld"; // 非主世界都为 null
          })
        : null,
    [biomes, biomeFilter]
  );
};

export default useFilterBiomes;
