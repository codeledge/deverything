import { randomArrayItem } from "./randomArrayItem";

export const randomEmptyValue = () => {
  return randomArrayItem([undefined, null, NaN, Infinity]);
};
