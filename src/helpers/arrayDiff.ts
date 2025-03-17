/**
 * Given 2 arrays, returns the (unique) elements that belong to each but not both at the same time.
 * @example
 * arrayDiff([1, 2, 3], [2, 3, 4]); // [1, 4]
 */
export const arrayDiff = (arr1: any[], arr2: any[]) => {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);

  return (
    [...arr1Set]
      .filter((value) => !arr2Set.has(value))
      // NOTE: need to do for both directions, or values from arr2 will be missed
      .concat([...arr2Set].filter((value) => !arr1Set.has(value)))
  );
};
