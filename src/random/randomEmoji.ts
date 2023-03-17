import { EMOJIS } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";

export const randomEmoji = () => {
  return randomArrayItem(EMOJIS);
};
