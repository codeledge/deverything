import { isStringOfEmojis } from "./isStringOfEmojis";
import { describe, test, expect } from "@jest/globals";

describe("isStringOfEmojis helper function", () => {
  test("should return true for a string of emojis", () => {
    const emojiString = "😀🤣😃😄😅";
    expect(isStringOfEmojis(emojiString)).toBe(true);
  });

  test("should return false for a string of text", () => {
    const textString = "This is a test string";
    expect(isStringOfEmojis(textString)).toBe(false);
  });

  test("should return false for a string of mixed text and emojis", () => {
    const mixedString = "This is a test string 😀🤣😃😄😅";
    expect(isStringOfEmojis(mixedString)).toBe(false);
  });

  test("should return true for a string of emojis with spaces", () => {
    const emojiStringWithSpaces = "😀 🤣 😃 😄 😅";
    expect(isStringOfEmojis(emojiStringWithSpaces)).toBe(true);
  });

  test("should return false for an empty string", () => {
    const emptyString = "";
    expect(isStringOfEmojis(emptyString)).toBe(false);
  });
});
