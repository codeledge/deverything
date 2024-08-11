import { SPECIAL_CHARACTERS } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";
import { randomString } from "./randomString";

export const randomPassword = ({
  minChars = 9,
  maxChars = 32,
}: { minChars?: number; maxChars?: number } = {}) =>
  randomString({ length: 1 }).toUpperCase() + // Upper case
  randomString({ length: randomInt({ min: minChars, max: maxChars }) - 3 }) + // At least 9 chars
  randomArrayItem(SPECIAL_CHARACTERS) + // Special character
  randomInt({ min: 1, max: 9 }); // Number
