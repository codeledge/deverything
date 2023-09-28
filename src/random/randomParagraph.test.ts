import { describe, it, expect } from "@jest/globals";
import { randomParagraph } from "./randomParagraph";

describe(`randomParagraph`, () => {
  it(`no args`, () => {
    expect(randomParagraph()).toBeDefined();
    expect(randomParagraph().length).toBeTruthy();
    expect(randomParagraph().endsWith(".")).toBeTruthy();
  });

  it(`respects maxCharacters`, () => {
    const result = randomParagraph({ maxCharacters: 10 });
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it(`generates a random number of words between minWords and maxWords`, () => {
    const result = randomParagraph({
      minWords: 5,
      maxWords: 10,
      maxCharacters: 1000,
    });

    const wordCount = result.split(" ").length;
    expect(wordCount).toBeGreaterThanOrEqual(5);
    expect(wordCount).toBeLessThanOrEqual(10);
  });

  it(`does not exceed maxCharacters even with large words count`, () => {
    const result = randomParagraph({
      maxCharacters: 10,
      minWords: 10,
      maxWords: 20,
    });
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it(`returns a string with a period at the end`, () => {
    const result = randomParagraph();
    expect(result.endsWith(".")).toBeTruthy();
  });
});
