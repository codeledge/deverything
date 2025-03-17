import { isValue } from "../validators/isValue";

/**
 *
 * @param items
 * @param key
 * @returns Record<keyof T, T[]>
 * @example
 * const items = [
 *   { externalId: 1, value: 100 },
 *   { externalId: 1, value: 50 },
 *   { externalId: 2, value: 200 },
 *   { externalId: 2, value: 100 },
 *   { mis_spelled_externalId: 2, value: 90 }, // not included in any group
 * ];
 * const ordersByInstrument = groupByKey(items, "externalId");
 * // {
 * //   1: [
 * //     { externalId: 1, value: 100 },
 * //     { externalId: 1, value: 50 },
 * //   ],
 * //   2: [
 * //     { externalId: 2, value: 200 },
 * //     { externalId: 2, value: 100 },
 * //   ],
 * // }
 */
export const groupByKey = <T, K extends keyof T>(
  items: T[],
  key: K
): Record<keyof T, T[]> => {
  return items.reduce((acc, item) => {
    const groupKey = item[key] as keyof T;
    if (!isValue(groupKey)) {
      // if item does not have the key, don't group it
      return acc;
    }
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<keyof T, T[]>);
};
