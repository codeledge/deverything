import { PlainObject } from "../types";

/**
 * A copy of `obj` without the given `keys`.
 *
 * @example omit({ a: 1, b: 2, c: 3 }, ["b"]) // { a: 1, c: 3 }
 */
export const omit = <T extends PlainObject, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> => {
  const omitted: readonly PropertyKey[] = keys;
  const ret: Partial<T> = {};
  for (const key in obj) {
    if (omitted.includes(key)) continue;
    ret[key] = obj[key];
  }
  return ret as Omit<T, K>;
};
