import { PlainObject } from "../types";
import { isValue } from "../validators";

/**
 *
 * @description Given an array of objects, returns a record where the key is the value of the object's key
 * NOTE: if two objects have the same key, the last one will be the one kept.
 * Useful for quick lookups by key.
 * @example
 * const items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
 * const itemsById = mapByKey(items, "id");
 * itemsById[1]; // { id: 1, name: "Alice" }
 * itemsById[2]; // { id: 2, name: "Bob" }
 */
export const mapByKey = <T extends PlainObject>(
  items: T[],
  key: keyof T
): Record<
  Exclude<T[keyof T], null | undefined>, // any value of T, excluding null and undefined
  T
> => {
  return items.reduce(
    (acc, item) => {
      // Do not add keys such as `null`, `undefined`, there is no case where this is useful
      if (isValue(item[key])) acc[item[key]] = item;

      return acc;
    },
    {} as Record<
      Exclude<T[keyof T], null | undefined>, // any value of T, excluding null and undefined
      T
    >
  );
};
