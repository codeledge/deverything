import { PlainObject } from "../types";

export const omit = <T extends PlainObject>(obj: T, keys: (keyof T)[]) => {
  const ret: Partial<T> = {};
  for (const key in obj) {
    if (keys.includes(key)) continue;
    ret[key] = obj[key];
  }
  return ret;
};
