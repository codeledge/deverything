import { array } from "../helpers";
import { capitalize } from "../helpers/capitalize";
import { randomInt } from "./randomInt";
import { randomWord } from "./randomWord";

// TODO: add a comma in the middle of the sentence
/**
 * Generates a random paragraph of text.
 * @param maxCharacters The maximum number of characters. The paragraph will be truncated to this length if it exceeds it. Default is 200.
 * @param words The number of words. Default is 8.
 * @returns A random paragraph of text.
 */
export const randomParagraph = ({
  maxCharacters = 200,
  minWords = 8,
  maxWords = 16,
}: {
  maxCharacters?: number;
  minWords?: number;
  maxWords?: number;
} = {}) => {
  return capitalize(
    array(randomInt({ min: minWords, max: maxWords }), () => randomWord())
      .join(" ")
      .slice(0, maxCharacters - 1) + "."
  );
};
