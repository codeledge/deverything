import { isValue } from "../validators/isValue";

/**
 *
 * @param items
 * @param key
 * @returns the items grouped by the value of their `key`
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
  items: readonly T[],
  key: K
): Record<Extract<T[K], PropertyKey>, T[]> => {
  const groups: Record<PropertyKey, T[]> = {};
  for (const item of items) {
    const groupKey = item[key];
    // if item does not have the key, don't group it
    if (!isValue(groupKey)) continue;
    const bucket = groupKey as PropertyKey;
    (groups[bucket] ??= []).push(item);
  }
  return groups as Record<Extract<T[K], PropertyKey>, T[]>;
};
