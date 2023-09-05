import { Maybe } from "../types";

export const isValue = (arg?: Maybe<any>): boolean => {
  return arg !== undefined && arg !== null && !Number.isNaN(arg);
};
