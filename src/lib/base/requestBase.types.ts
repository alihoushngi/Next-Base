import { AxiosRequestConfig, AxiosResponse } from "axios";

export type TVersion = "v1" | "";
export interface IRequestOption<D>
  extends Omit<AxiosRequestConfig<D>, "baseURL"> {
  version?: TVersion;
  sendAuthorization?: boolean;
}

export interface IResponse<T> extends AxiosResponse<T> {
  status: number;
}

export interface BaseResponse<T> {
  access_token: string;
  expires_in: number;
  token_type: string;
  result: {
    data: T;
  };
}
