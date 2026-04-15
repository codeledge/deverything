import { capitalize } from "../helpers/capitalize";
import { randomInt } from "./randomInt";
import { randomWord } from "./randomWord";

// TODO: add a comma in the middle of the sentence
/**
 * Generates a random paragraph of text.
 * @param maxCharacters The maximum number of characters. The paragraph will be truncated to this length if it exceeds it. Default is 200.
 * @param minCharacters The minimum number of characters. Words will be added beyond maxWords until this threshold is met. Default is undefined (no minimum).
 * @param minWords The minimum number of words. Default is 8.
 * @param maxWords The maximum number of words. Default is 16.
 * @returns A random paragraph of text.
 */
export const randomParagraph = ({
  maxCharacters = 200,
  minCharacters,
  minWords = 8,
  maxWords = 16,
}: {
  maxCharacters?: number;
  minCharacters?: number;
  minWords?: number;
  maxWords?: number;
} = {}) => {
  const words: string[] = [];
  const targetWordCount = randomInt({ min: minWords, max: maxWords });

  for (
    let i = 0;
    i < targetWordCount ||
    (minCharacters !== undefined && words.join(" ").length < minCharacters);
    i++
  ) {
    words.push(randomWord());
  }

  return capitalize(words.join(" ").slice(0, maxCharacters - 1) + ".");
};
