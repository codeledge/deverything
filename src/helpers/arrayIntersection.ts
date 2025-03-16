import { uniqueValues } from "./uniqueValues";

/**
 * @description Given 2 arrays, returns the (unique) elements that belong to both arrays.
 * @example
 * arrayIntersection([1, 2, 3], [2, 3, 4]); // [2, 3]
 */
export const arrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  const arr2Set = new Set(arr2);
  return uniqueValues(arr1.filter((value) => arr2Set.has(value)));
};
