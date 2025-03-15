import { Maybe } from "../types";

export const isValue = <T>(arg?: Maybe<T>): arg is T => {
  return arg !== undefined && arg !== null && !Number.isNaN(arg);
};
