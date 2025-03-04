import { uniqueValues } from "./uniqueValues";

/**
 * Given 2 arrays, returns the elements that belong to each but not both at the same time.
 */
export const arrayDiff = (arr1: any[], arr2: any[]) => {
  // TODO: optimize with maps?
  return uniqueValues(
    arr1
      .filter((value) => !arr2.includes(value))
      .concat(arr2.filter((value) => !arr1.includes(value))),
  );
};
