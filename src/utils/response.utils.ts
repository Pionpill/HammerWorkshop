import { NextResponse } from "next/server";

export interface ResponseData<T> {
  data: T;
  success: true;
  [key: string]: any;
}

export const makeSuccessResponse = <T>(data: T, otherData?: Record<string, any>, responseInit?: ResponseInit) => {
  return NextResponse.json<ResponseData<T>>({ success: true, data, ...otherData } as ResponseData<T>, responseInit);
};

export interface ErrorResponseData {
  success: false;
  reason: "db" | "sql";
  message: string;
  [key: string]: any;
}

export const makeResponseError = (data: Omit<ErrorResponseData, "success">, responseInit?: ResponseInit) => {
  return NextResponse.json<ErrorResponseData>({ success: false, ...data } as ErrorResponseData, responseInit);
};
