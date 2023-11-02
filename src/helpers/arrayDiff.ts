import { uniqueValues } from "./uniqueValues";

// TODO: optimize with maps?
export const arrayDiff = (arr1: any[], arr2: any[]) => {
  return uniqueValues(
    arr1
      .filter((value) => !arr2.includes(value))
      .concat(arr2.filter((value) => !arr1.includes(value)))
  );
};
