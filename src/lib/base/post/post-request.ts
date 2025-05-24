import { IResponse } from "../requestBase.types";
import { sendRequest } from "../requsetBase";
import { IPostRequestOption } from "./post-request-interface";

export default async function postRequest<T, D>(
  options: IPostRequestOption<D>,
): Promise<IResponse<T>> {
  return sendRequest<T>({ method: "POST", ...options });
}
