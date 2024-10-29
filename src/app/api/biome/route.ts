import { BiomeData } from "@/model/ecology/biome";
import { makeResponseError, makeSuccessResponse } from "@/utils/response.utils";
import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

const client = new MongoClient("mongodb://localhost:27017");

export const GET = (request: NextRequest) => {
  return client
    .connect()
    .then(() => {
      const biomes = client.db("hammer").collection<BiomeData>("biome");
      return biomes.find().toArray();
    })
    .then((data) => makeSuccessResponse(data))
    .catch(() => {
      return makeResponseError({ message: "mongodb error", errorReason: "db" });
    });
};
