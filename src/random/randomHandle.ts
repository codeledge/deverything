import { WESTERN_FIRST_NAMES, WESTERN_LAST_NAMES } from "../constants/names";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";

export const randomHandle = () =>
  (
    randomArrayItem(WESTERN_FIRST_NAMES) +
    "." +
    randomArrayItem(WESTERN_LAST_NAMES)
  ).toLowerCase() + randomInt(11, 99);
