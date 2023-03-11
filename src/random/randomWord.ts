import { WORDS } from "../constants/words";
import { randomArrayItem } from "./randomArrayItem";

export const randomWord = () => {
  return randomArrayItem(WORDS);
};
