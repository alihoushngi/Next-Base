import { IResponse } from "../requestBase.types";
import { sendRequest } from "../requsetBase";
import { IPatchRequestOption } from "./patch-request-interface";

export default async function patchRequest<T, D>(
  options: IPatchRequestOption<D>,
): Promise<IResponse<T>> {
  return sendRequest<T>({ method: "PATCH", ...options });
}
