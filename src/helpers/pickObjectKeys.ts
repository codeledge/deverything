import { ObjectKeys, PlainObject } from "../types";

/**
 *
 * @description Given an object, returns a new object with only the keys that are in the `keys` array.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * pickObjectKeys(obj, ["a", "c"]); // { a: 1, c: 3 }
 */
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
