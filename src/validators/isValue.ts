import { Maybe } from "../types";

export const isValue = (arg?: Maybe<any>) => {
  return arg !== undefined && arg !== null && !Number.isNaN(arg);
};
