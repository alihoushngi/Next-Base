import { AxiosRequestConfig } from "axios";
import { IRequestOption } from "../requestBase.types";

export interface IPutRequestOption<D>
  extends Omit<AxiosRequestConfig<D>, "method">,
    IRequestOption<D> {}
