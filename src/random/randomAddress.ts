import { ADDRESSES } from "../constants/addresses";
import { randomArrayItem } from "./randomArrayItem";

export const randomAddress = () => {
  return randomArrayItem(ADDRESSES);
};
