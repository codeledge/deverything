import { ObjectValues, PlainObject } from "../types/Object";

/**
 *
 * @description Given an object, returns a new object with only the keys that have the values in the `values` array.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * pickObjectValues(obj, [1, 3]); // { a: 1, c: 3 }
 */
export const pickObjectValues = <T extends PlainObject>(
  obj: T,
  values: ObjectValues<T>
): Partial<T> => {
  const ret: Partial<T> = {};
  for (const key in obj) {
    if (values.includes(obj[key])) ret[key] = obj[key];
  }
  return ret;
};
