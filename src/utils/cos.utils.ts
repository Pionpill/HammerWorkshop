import CosConfig from "@/config/cos";

/**
 *
 * @param modelName 模型名称，可以是仅模型名或者url
 * @param addonName 模组名称
 * @param fileFormat 文件格式，默认 gltf
 */
const getModelPathOfCrop = (modelName: string, addonName: string) => {
  const cropName = modelName.split("_stage_")[0];
  const segments = [CosConfig.url, addonName, "model", cropName, modelName];
  return segments.join("/");
};

export const cosUtils = { getModelPathOfCrop };
