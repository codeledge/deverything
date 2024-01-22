import { ObjectKeys } from "../types";
import { PlainObject } from "../types/PlainObject";

export const pickObjectKeys = <T extends PlainObject>(
  obj: T,
  keys: ObjectKeys<T>
): Partial<T> => {
  const ret: Partial<T> = {};
  for (const key in obj) {
    if (keys.includes(key)) ret[key] = obj[key];
  }
  return ret;
};
