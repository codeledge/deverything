import { controlCharRegex } from "../regex/controlCharRegex";
import { invisibleWhitespaceRegex } from "../regex/invisibleWhitespaceRegex";
import { lineSeparatorRegex } from "../regex/lineSeparatorRegex";
import { paragraphSeparatorRegex } from "../regex/paragraphSeparatorRegex";

export const cleanSpaces = (str: string): string => {
  return str
    .replace(controlCharRegex, " ")
    .replace(invisibleWhitespaceRegex, " ")
    .replace(lineSeparatorRegex, " ")
    .replace(paragraphSeparatorRegex, " ")
    .trim() // leave trim after replace, so this test can pass `expect(cleanSpaces(" \b ")).toBe("");`
    .replace(/\s{2,}/g, " "); // replace multiple spaces with one space
};
