import { HEX_VALUES } from "../constants/hex";
import { array } from "../helpers";
import { randomArrayItem } from "./randomArrayItem";

export const randomHexColor = () => {
  return "#" + array(6, () => randomArrayItem(HEX_VALUES)).join("");
};
