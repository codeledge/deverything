import { WESTERN_FIRST_NAMES, WESTERN_LAST_NAMES } from "../constants/names";
import { randomArrayItem } from "./randomArrayItem";
import { randomNumericId } from "./randomNumericId";

export const randomHandle = () =>
  (
    randomArrayItem(WESTERN_FIRST_NAMES) +
    "." +
    randomArrayItem(WESTERN_LAST_NAMES)
  ).toLowerCase() + randomNumericId(); // use randomNumericId too keep handles process-unique
