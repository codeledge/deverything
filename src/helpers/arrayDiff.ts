import { uniqueValues } from "./uniqueValues";

export const arrayDiff = (arr1: any[], arr2: any[]) => {
  return uniqueValues(
    arr1
      .filter((value) => !arr2.includes(value))
      .concat(arr2.filter((value) => !arr1.includes(value)))
  );
};
