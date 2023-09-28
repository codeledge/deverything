import { describe, it, expect } from "@jest/globals";
import { randomParagraph } from "./randomParagraph";

describe(`randomParagraph`, () => {
  it(`no args`, () => {
    expect(randomParagraph()).toBeDefined();
    expect(randomParagraph().length).toBeTruthy();
    expect(randomParagraph().endsWith(".")).toBeTruthy();
  });
});

it(`respects maxCharacters`, () => {
  const result = randomParagraph({ maxCharacters: 10 });
  expect(result.length).toBeLessThanOrEqual(10);
});

it(`respects words count with a large enough maxCharacters`, () => {
  const result = randomParagraph({ words: 5, maxCharacters: 1000 });
  const wordCount = result.split(" ").length;
  // Subtracting 1 because the last word is followed by a period.
  expect(wordCount).toEqual(5);
});

it(`does not exceed maxCharacters even with large words count`, () => {
  const result = randomParagraph({ maxCharacters: 10, words: 10 });
  expect(result.length).toBeLessThanOrEqual(10);
});

it(`returns a string with a period at the end`, () => {
  const result = randomParagraph();
  expect(result.endsWith(".")).toBeTruthy();
});
