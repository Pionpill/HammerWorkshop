import { getAllBiomes } from "@/app/api/biome";
import { Biome } from "@/model/ecology/biome";
import { useEffect, useState } from "react";

let allBiomes: Biome[] | null = null;

/**
 * 获取全量生态数据，仅会初始化一次
 * @returns 全量生态数据
 */
const useBiomes = () => {
  const [state, setState] = useState<Biome[] | null>(allBiomes);
  useEffect(() => {
    if (!state) {
      getAllBiomes().then((data) => {
        const biomes = data.map((biome) => new Biome(biome));
        allBiomes = biomes;
        setState(biomes);
      });
    }
  }, []);
  return state;
};

export default useBiomes;
