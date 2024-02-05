/**
 * @description Merge two arrays, unique values, no options
 * @example mergeArrays([1,2,3], [2,3,4]) => [1,2,3,4]
 */
export const mergeArrays = (arrayA: any[], arrayB: any[]) => {
  return arrayA.concat(
    arrayB.filter((item) => {
      return !arrayA.includes(item); // TODO: use isSame for objects
    })
  );
};
