import { PlainObject } from "../types";
import { isValue } from "../validators";

export const mapByKey = <T extends PlainObject>(
  items: T[],
  key: keyof T
): Record<keyof T, T> => {
  return items.reduce((acc, item) => {
    // Do not add keys such as `null`, `undefined`, there is no case where this is useful
    if (isValue(item[key])) acc[item[key]] = item;

    return acc;
  }, {} as Record<keyof T, T>);
};
