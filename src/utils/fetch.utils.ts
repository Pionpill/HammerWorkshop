import { MONGODB_API_ERROR } from "@/constant";
import { NextResponse } from "next/server";
import { ErrorResponseData, ResponseData } from "./response.utils";

export const fetchGet = <T>(url: string, params?: Record<string, any>, requestInit?: RequestInit) => {
  const searchParams = new URLSearchParams(params);
  const realUrl = url + "?" + searchParams.toString();

  return fetch(realUrl, {
    method: "GET",
    ...requestInit,
  }) as Promise<T>;
};

export const fetchGetMongo = <T>(url: string, params?: Record<string, any>, requestInit?: RequestInit) => {
  return fetchGet<NextResponse<ResponseData<T>> | NextResponse<ErrorResponseData>>(url, params, requestInit)
    .then((response) => response.json())
    .then((json: ResponseData<T> | ErrorResponseData) => (!json.success ? Promise.reject(MONGODB_API_ERROR) : json));
};
