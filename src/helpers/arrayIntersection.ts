import { uniqueValues } from "./uniqueValues";

export const arrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return uniqueValues(arr1.filter((value) => arr2.includes(value)));
};
