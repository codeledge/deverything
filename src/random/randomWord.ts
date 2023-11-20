import { NOUNS, VERBS, WORDS } from "../constants/words";
import { randomArrayItem } from "./randomArrayItem";

export const randomWord = () => {
  return randomArrayItem(WORDS);
};

export const randomNoun = () => {
  return randomArrayItem(NOUNS);
};

export const randomVerb = () => {
  return randomArrayItem(VERBS);
};
