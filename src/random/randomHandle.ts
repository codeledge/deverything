import { LATIN_FIRST_NAMES, LATIN_LAST_NAMES } from "../constants/names";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";

export const randomHandle = () =>
  (
    randomArrayItem(LATIN_FIRST_NAMES) +
    "." +
    randomArrayItem(LATIN_LAST_NAMES)
  ).toLowerCase() + randomInt(11, 99);
