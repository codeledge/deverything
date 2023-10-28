import { Maybe } from "../types/Maybe";
import { getUrlSearchParams } from "./getUrlSearchParams";

export const getUrlSearchParam = (
  urlString: Maybe<string>,
  param: string
): string | undefined => {
  return getUrlSearchParams(urlString)[param];
};
