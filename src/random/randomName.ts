import {
  ANIMAL_NAMES,
  FIRST_NAMES,
  LAST_NAMES,
  LATIN_FIRST_NAMES,
  LATIN_LAST_NAMES,
  TOOL_NAMES,
} from "../constants/names";
import { randomArrayItem } from "./randomArrayItem";

export const randomName = () =>
  randomArrayItem([...ANIMAL_NAMES, ...TOOL_NAMES]);

export const randomFirstName = () => randomArrayItem(FIRST_NAMES);

export const randomLastName = () => randomArrayItem(LAST_NAMES);

export const randomFullName = () =>
  randomArrayItem(LATIN_FIRST_NAMES) + " " + randomArrayItem(LATIN_LAST_NAMES);
