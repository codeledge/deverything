import { PlainObject } from "../types";
import { isValue } from "../validators";

export const pluck = <T extends PlainObject>(
  items: T[],
  key: keyof T
): Exclude<T[keyof T], null | undefined>[] => {
  return items.reduce((acc, item) => {
    // Do not add keys such as `null`, `undefined`, there is no case where this is useful
    if (isValue(item[key])) acc.push(item[key]);

    return acc;
  }, [] as Exclude<T[keyof T], null | undefined>[]);
};
