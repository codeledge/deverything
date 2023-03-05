import { Maybe } from "../types";

export const isEmpty = (value?: Maybe<any>) => {
  return value === undefined || value === null || value === "";
};
