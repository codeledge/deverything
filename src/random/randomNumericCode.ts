import { array } from "../helpers/array";
import { randomInt } from "./randomInt";

/**
 * Generates a random numeric code for tests and fixtures, e.g. a fake verification code.
 * Uses `Math.random`, so codes are predictable: never use it for real verification codes,
 * OTPs or anything else in production; use `crypto.randomInt()` there.
 * Does not start with 0.
 * @param length The length of the code to generate.
 * @returns A random numeric code.
 * @example
 * randomNumericCode(); => "123456"
 * @example
 * randomNumericCode({ length: 4 }); => "1234"
 */
export const randomNumericCode = ({ length = 6 }: { length?: number } = {}) => {
  if (length < 1)
    throw new Error("randomNumericCode: Length must be greater than 0.");

  return array(length, (_, index) =>
    randomInt({ min: !index ? 1 : 0, max: 9 })
  ).join("");
};
