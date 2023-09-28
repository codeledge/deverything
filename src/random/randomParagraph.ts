import { array } from "../helpers";
import { capitalize } from "../helpers/capitalize";
import { randomWord } from "./randomWord";

/**
 * Generates a random paragraph of text.
 * @param maxCharacters The maximum number of characters. The paragraph will be truncated to this length if it exceeds it. Default is 200.
 * @param words The number of words. Default is 8.
 * @returns A random paragraph of text.
 */
export const randomParagraph = ({
  maxCharacters = 200,
  words = 8,
}: {
  maxCharacters?: number;
  words?: number;
} = {}) => {
  return capitalize(
    array(words, () => randomWord())
      .join(" ")
      .slice(0, maxCharacters - 1) + "."
  );
};
