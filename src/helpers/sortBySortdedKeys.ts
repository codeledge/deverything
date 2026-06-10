/**
 * Sort an array to match the order defined by key values on `field`.
 *
 * @remarks Returns a new array. Does not mutate `array`.
 * @example
 * const array = [{ id: 2, name: "Alice" }, { id: 1, name: "Bob" }, { id: 3, name: "Charlie" }];
 * const sortedArray = sortBySortdedKeys(array, [1, 2, 3]);
 * // sortedArray = [{ id: 1, name: "Bob" }, { id: 2, name: "Alice" }, { id: 3, name: "Charlie" }];
 */
export const sortBySortdedKeys = <T extends Record<string, unknown>>(
  array: T[],
  keys: (string | number)[],
  options?: { direction?: "asc" | "desc"; field?: keyof T }
): T[] => {
  const { direction = "asc", field = "id" as keyof T } = options ?? {};

  if (keys.length === 0) {
    return [...array];
  }

  const orderIndex = new Map(keys.map((key, index) => [key, index]));
  const fallback = direction === "asc" ? keys.length : -1;

  return [...array].sort((left, right) => {
    const order =
      (orderIndex.get(left[field] as string | number) ?? fallback) -
      (orderIndex.get(right[field] as string | number) ?? fallback);

    return direction === "asc" ? order : -order;
  });
};
