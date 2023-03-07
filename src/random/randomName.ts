import {
  ANIMAL_NAMES,
  FIRST_NAMES,
  LAST_NAMES,
  LATIN_FIRST_NAMES,
  LATIN_LAST_NAMES,
  TOOL_NAMES,
} from "../constants/names";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";

export const randomName = () =>
  randomArrayItem([...ANIMAL_NAMES, ...TOOL_NAMES]);

export const randomFirstName = () => randomArrayItem(FIRST_NAMES);

export const randomLastName = () => randomArrayItem(LAST_NAMES);

export const randomFullName = () =>
  randomArrayItem(LATIN_FIRST_NAMES) + " " + randomArrayItem(LATIN_LAST_NAMES);

export const randomHandle = () =>
  (
    randomArrayItem(LATIN_FIRST_NAMES) +
    "." +
    randomArrayItem(LATIN_LAST_NAMES)
  ).toLowerCase() + randomInt(11, 99);
