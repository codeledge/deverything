import { array } from "../helpers/array";
import { randomArrayItem } from "./randomArrayItem";

// avoid 0s and Os as they get confused with each other
const chars = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");

/**
 * Generates a random alphanumeric code that can be used for verification codes, etc.
 * Does not contain 0s or Os as they get confused with each other.
 * @param length The length of the code to generate.
 * @returns A random alphanumeric code.
 * @example
 * randomAlphaNumericCode(); => "A2G4G6"
 */
export const randomAlphaNumericCode = ({
  length = 6,
}: { length?: number } = {}) => {
  if (length < 1)
    throw new Error("randomAlphaNumericCode: Length must be greater than 0.");

  return array(length, () => randomArrayItem(chars)).join("");
};
