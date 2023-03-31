import { array } from "../helpers/array";
import { randomInt } from "./randomInt";

/**
 * Generates a random numeric code that can be used for verification codes, etc.
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

  return array(length, (_, index) => randomInt(!index ? 1 : 0, 9)).join("");
};
