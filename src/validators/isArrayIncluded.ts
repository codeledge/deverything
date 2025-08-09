/**
 * Checks if all elements of the first array are included in the second array.
 *
 * @template T - The type of elements in the arrays.
 * @param arr1 - The array whose elements are to be checked for inclusion.
 * @param arr2 - The array to check against.
 * @returns True if every element in arr1 is included in arr2, false otherwise.
 */

export const isArrayIncluded = <T>(arr1: T[], arr2: T[]): boolean => {
  return arr1.every((value) => arr2.includes(value));
};
