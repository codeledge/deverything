import { EMOJI_SAMPLE } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";

export const randomEmoji = () => {
  return randomArrayItem(EMOJI_SAMPLE);
};
