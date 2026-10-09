import { SPECIAL_CHARACTERS } from "../constants/unicode";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";
import { randomString } from "./randomString";

/**
 * Generates a password that passes common strength rules, for tests and fixtures.
 * Uses `Math.random`, so passwords are predictable: never use it for real passwords or
 * secrets; use `crypto.getRandomValues()` there.
 */
export const randomPassword = ({
  minChars = 9,
  maxChars = 32,
}: { minChars?: number; maxChars?: number } = {}) =>
  randomString({ length: 1 }).toUpperCase() + // Upper case
  randomString({ length: randomInt({ min: minChars, max: maxChars }) - 3 }) + // At least 9 chars
  randomArrayItem(SPECIAL_CHARACTERS) + // Special character
  randomInt({ min: 1, max: 9 }); // Number
