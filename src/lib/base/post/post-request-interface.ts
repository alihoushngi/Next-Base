import { AxiosRequestConfig } from "axios";
import { IRequestOption } from "../requestBase.types";

export interface IPostRequestOption<D>
  extends Omit<AxiosRequestConfig<D>, "method">,
    IRequestOption<D> {}
