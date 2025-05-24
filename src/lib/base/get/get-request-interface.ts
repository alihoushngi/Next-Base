import { AxiosRequestConfig } from "axios";
import { IRequestOption } from "../requestBase.types";

export interface IGetRequestOption<D>
  extends Omit<AxiosRequestConfig, "method" | "data">,
    IRequestOption<D> {}
