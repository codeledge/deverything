import { SPECIAL_CHARACTERS } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";
import { randomHtmlColorName } from "./randomHtmlColorName";
import { randomInt } from "./randomInt";

export const randomPassword = () =>
  randomHtmlColorName() + // So it has an upper case
  randomArrayItem(SPECIAL_CHARACTERS) + // So it has a special character
  randomInt(11, 99); // So it has a number
