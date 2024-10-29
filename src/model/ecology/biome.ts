import { WithId } from "mongodb";

export const BiomeTagCnName = {
  ocean: "海洋",
  lukewarm: "温暖",
  deep: "深海",
  frozen: "冰冻",
  ice: "冰",
  mountain: "山脉",
  swamp: "沼泽",
  warm: "温暖",
  river: "河流",
  edge: "边缘",
  extreme_hills: "极端山丘",
  desert: "沙漠",
  forest: "森林",
  plains: "平原",
  bee_habitat: "蜜蜂栖息地",
  beach: "海滩",
  jungle: "丛林",
  rare: "罕见",
  cold: "寒冷",
  store: "商店",
  savanna: "草原",
  birch: "白桦树",
  hills: "山丘",
  taiga: "针叶林",
  mega: "巨大",
  plateau: "高原",
  bamboo: "竹林",
  mesa: "美沙",
  mushroom_island: "蘑菇岛",
  ice_plains: "冰原",
  dessert: "沙漠",
  no_legacy_worldgen: "无遗留世界生成",
  roofed: "有屋顶",
  mutated: "变异",
  mountains: "山脉",
  meadow: "草甸",
  caves: "洞穴",
  dripstone_caves: "滴石洞穴",
  lush_caves: "繁茂洞穴",
  frozen_peaks: "冰封山峰",
  shore: "海岸",
  stone: "石头",
  jagged_peaks: "锯齿山峰",
  grove: "林地",
};

export const BiomeCategoryCnName = {
  ocean: "海洋类",
  mountain: "山地类",
  forest: "森林类",
  swamp: "湿地类",
  plain: "平原类",
  drought: "干旱类",
  cave: "洞穴类",
  nether: "下界类",
  the_end: "末地类",
  river: "河流类",
};

export const BiomeDimensionCnName = {
  overworld: "主世界",
  nether: "下界",
  the_end: "末地",
};

export const BiomeClimateCnName = {
  hot: "热带",
  warm: "温带",
  cold: "寒冷",
};

export type BiomeTag = keyof typeof BiomeTagCnName;
export type BiomeCategory = keyof typeof BiomeCategoryCnName;
export type BiomeDimension = keyof typeof BiomeDimensionCnName;
export type BiomeClimate = keyof typeof BiomeClimateCnName;

export interface BiomeData {
  name_cn: string;
  temperature: number;
  rainfall: number;
  dimension: BiomeDimension;
  climate: BiomeClimate;
  category: BiomeCategory;
  tags: Array<BiomeTag>;
  generate: number | null; // 万分之
  snow_accumulation: [number, number] | null;
}

/** 生态类，仅从数据库中获取 */
export class Biome {
  /** 在数据库中的 id，同时是英文名 */
  readonly id: string;
  /** 中文名 */
  readonly nameCn: string;
  /** 温度，单位：摄氏度 */
  readonly temperature: number;
  /** 降水，单位：百分之 */
  readonly rainfall: number;
  /** 维度 */
  readonly dimension: BiomeDimension;
  /** 热带温带寒带 */
  readonly climate: BiomeClimate;
  /** 群系类型 */
  readonly category: BiomeCategory;
  /** 生成概率，单位：万分之 */
  readonly generate: number | null;
  /** 生态标签 */
  readonly tags: ReadonlyArray<BiomeTag>;
  /** 降雪高度 */
  readonly snowAccumulation: readonly [number, number] | null;

  constructor(data: WithId<BiomeData>) {
    this.id = data._id.toString();
    this.nameCn = data.name_cn;
    this.temperature = data.temperature * 20;
    this.rainfall = data.rainfall * 100;
    this.dimension = data.dimension;
    this.climate = data.climate;
    this.category = data.category;
    this.generate = data.generate;
    this.tags = Object.freeze(data.tags);
    this.snowAccumulation = data.snow_accumulation ? Object.freeze(data.snow_accumulation) : null;
  }

  get name() {
    return this.id;
  }

  get cnTags() {
    return this.tags.map((tag) => BiomeTagCnName[tag]);
  }

  // 获取标签的中文名
  static getCnTag(tag: BiomeTag) {
    return BiomeTagCnName[tag];
  }

  toString() {
    return `Biome: ${this.name}`;
  }
}
