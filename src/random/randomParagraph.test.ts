import { describe, it, expect } from "vitest";
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

  it(`respects minCharacters`, () => {
    for (let i = 0; i < 20; i++) {
      const result = randomParagraph({ minCharacters: 100, maxCharacters: 500 });
      expect(result.length).toBeGreaterThanOrEqual(100);
    }
  });

  it(`respects minCharacters and maxCharacters together`, () => {
    for (let i = 0; i < 20; i++) {
      const result = randomParagraph({
        minCharacters: 150,
        maxCharacters: 200,
      });
      expect(result.length).toBeGreaterThanOrEqual(150);
      expect(result.length).toBeLessThanOrEqual(200);
    }
  });

  it(`caps at maxCharacters when minCharacters exceeds it`, () => {
    for (let i = 0; i < 20; i++) {
      const result = randomParagraph({
        minCharacters: 300,
        maxCharacters: 200,
      });
      expect(result.length).toBeLessThanOrEqual(200);
    }
  });

  it(`default behavior is unchanged without minCharacters`, () => {
    for (let i = 0; i < 20; i++) {
      const result = randomParagraph();
      expect(result.length).toBeLessThanOrEqual(200);
      expect(result.endsWith(".")).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    }
  });
});
