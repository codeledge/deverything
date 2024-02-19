import { ObjectKey, PlainObject } from "../types";

export const firstKey = <T extends PlainObject>(arg: T): ObjectKey<T> =>
  Object.keys(arg)[0];
