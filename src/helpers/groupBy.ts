import { Key } from "../types";

export const groupBy = <T>(items: T[], key: keyof T): Record<Key, T[]> => {
  return items.reduce((acc, item) => {
    const groupKey = item[key] as unknown as Key;
    if (!groupKey) {
      // if item does not have the key, don't group it
      return acc;
    }
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<Key, T[]>);
};
