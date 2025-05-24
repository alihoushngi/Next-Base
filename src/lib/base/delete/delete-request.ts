import { IResponse } from "../requestBase.types";
import { sendRequest } from "../requsetBase";
import { IDeleteRequestOption } from "./delete-request-interface";

export default async function deleteRequest<T, D>(
  options: IDeleteRequestOption<D>,
): Promise<IResponse<T>> {
  return sendRequest<T>({ method: "DELETE", ...options });
}
