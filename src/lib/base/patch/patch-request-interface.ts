import { AxiosRequestConfig } from "axios";
import { IRequestOption } from "../requestBase.types";

export interface IPatchRequestOption<D>
  extends Omit<AxiosRequestConfig<D>, "method">,
    IRequestOption<D> {}
