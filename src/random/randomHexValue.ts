import { HEX_VALUES } from "../constants/hex";
import { randomArrayItem } from "./randomArrayItem";

export const randomHexValue = () => {
  return randomArrayItem(HEX_VALUES);
};
