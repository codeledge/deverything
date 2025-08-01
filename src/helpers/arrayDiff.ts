/**
 * Given 2 arrays, returns the (unique) elements that belong to each but not both at the same time.
 * @example
 * arrayDiff([1, 2, 3], [2, 3, 4]); // [1, 4]
 */
export const arrayDiff = (arr1: any[], arr2: any[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff1 = [...set1].filter((value) => !set2.has(value));
  // NOTE: need to do for both directions, or values from arr2 not contained in arr1 will be missed
  const diff2 = [...set2].filter((value) => !set1.has(value));

  return [...diff1, ...diff2];
};
