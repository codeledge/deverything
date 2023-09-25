import { SPECIAL_CHARACTERS } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";
import { randomHtmlColorName } from "./randomHtmlColorName";
import { randomInt } from "./randomInt";

export const randomPassword = ({ minChars = 9 }: { minChars?: number } = {}) =>
  randomHtmlColorName().padEnd(minChars, "-") + // So it has an upper case, at least 9 charss
  randomArrayItem(SPECIAL_CHARACTERS) + // So it has a special character
  randomInt(11, 99); // So it has a number
