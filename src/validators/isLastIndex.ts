import { lastIndex } from "../helpers/lastIndex";

export const isLastIndex = (index: number, array: any[]): boolean => {
  return index === lastIndex(array);
};
