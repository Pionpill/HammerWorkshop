import { BiomeData } from "@/model/ecology/biome";
import { fetchGetMongo } from "@/utils/fetch.utils";
import { WithId } from "mongodb";

export const getAllBiomes = () => fetchGetMongo<WithId<BiomeData>[]>("/api/biome").then((response) => response.data);
