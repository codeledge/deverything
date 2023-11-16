import { describe, it, expect } from "@jest/globals";
import { emojiRegex } from "./emojiRegex";

describe("emojiRegex", () => {
  it("should match strings containing emojis", () => {
    expect(emojiRegex.test("Hello, world! 👋")).toBe(true);
    expect(emojiRegex.test("I love 🍕")).toBe(true);
    expect(emojiRegex.test("🎉🎉🎉")).toBe(true);
  });

  it("should not match strings without emojis", () => {
    expect(emojiRegex.test("Hello, world!")).toBe(false);
    expect(emojiRegex.test("I love pizza")).toBe(false);
    expect(emojiRegex.test("1234567890")).toBe(false);
  });
});
