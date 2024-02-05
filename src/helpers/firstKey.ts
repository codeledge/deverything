import { ObjectKey, PlainObject } from "../types";
import { getKeys } from "./getKeys";

export const firstKey = <T extends PlainObject>(arg: T): ObjectKey<T> =>
  getKeys(arg)[0];
