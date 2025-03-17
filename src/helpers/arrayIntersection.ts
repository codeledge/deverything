/**
 * @description Given 2 arrays, returns the (unique) elements that belong to both arrays.
 * @example
 * arrayIntersection([1, 2, 3], [2, 3, 4]); // [2, 3]
 */
export const arrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  // Early return if either array is empty
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }

  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  const [smallSet, largeSet] =
    arr1Set.size < arr2Set.size ? [arr1Set, arr2Set] : [arr2Set, arr1Set];

  return [...smallSet].filter((value) => largeSet.has(value));
};
