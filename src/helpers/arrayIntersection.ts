import { uniqueValues } from "./uniqueValues";

export const arrayIntersection = (arr1: any[], arr2: any[]) => {
  return uniqueValues(arr1.filter((value) => arr2.includes(value)));
};
