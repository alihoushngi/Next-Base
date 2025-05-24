import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";

import { IRequestOption, IResponse } from "./requestBase.types";

export function successHandler<T>(response: IResponse<T>): IResponse<T> {
  return response;
}

export function errorHandler(error: unknown): void {
  throw error;
}

// T -> response type
// D -> payload type

export async function sendRequest<T, D = unknown>({
  headers,
  version = "",
  sendAuthorization = true,
  ...restOptions
}: IRequestOption<D>): Promise<IResponse<T>> {
  const baseURL: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${version}`;

  const axiosInstance: AxiosInstance = axios.create({ baseURL });

  axiosInstance.interceptors.request.use((config) => {
    const access_token = getCookie("token") as string | undefined;

    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    };

    if (access_token && sendAuthorization) {
      config.headers.set("Authorization", `Bearer ${access_token}`);
    }

    Object.entries(defaultHeaders).forEach(([key, value]) => {
      config.headers.set(key, value);
    });

    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      toast.success("درخواست با موفقیت انجام شد");
      return res;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  try {
    const response: IResponse<T> = await axiosInstance({ ...restOptions });
    successHandler<T>(response);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message || "خطایی رخ داده");
      errorHandler(error);
    } else {
      toast.error("خطای ناشناخته");
      errorHandler(new Error("Unknown error"));
    }
    return Promise.reject(error);
  }
}
