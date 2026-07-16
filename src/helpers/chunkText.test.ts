import { describe, expect, test } from "vitest";
import { chunkText } from "./chunkText";

describe("chunkText", () => {
  test("splits text into chunks of the given size", () => {
    expect(chunkText("abcdefgh", 3)).toEqual(["abc", "def", "gh"]);
    expect(chunkText("hello", 5)).toEqual(["hello"]);
    expect(chunkText("hello", 10)).toEqual(["hello"]);
    expect(chunkText("", 3)).toEqual([]);
  });

  const text = "Hello world. How are you? I am fine.";

  test("preserves sentence shorter than chunk size", () => {
    const chunks = chunkText(
      text,
      5, // shorter than sentence
      { preserveOnBreak: "sentence" }
    );
    expect(chunks).toEqual([
      "Hello",
      " worl",
      "d. ",
      "How a",
      "re yo",
      "u? ",
      "I am ",
      "fine.",
    ]);
    expect(chunks.some((chunk) => chunk.length > 5)).toBe(false);
  });

  test("preserves sentence shorter than chunk size", () => {
    const chunks = chunkText(text, 25, { preserveOnBreak: "sentence" });
    expect(chunks).toEqual(["Hello world. ", "How are you? I am fine."]);
    expect(chunks.some((chunk) => chunk.length > 25)).toBe(false);
  });

  test("preserves words shorter than chunk size", () => {
    const chunks = chunkText(text, 25, { preserveOnBreak: "word" });
    expect(chunks).toEqual(["Hello world. How are you?", " I am fine."]);
    expect(chunks.some((chunk) => chunk.length > 25)).toBe(false);
  });

  test("never exceeds maxSize with surrogate-pair unicode", () => {
    const chunks = chunkText("👍👍👍👍👍", 3);
    expect(chunks.every((chunk) => chunk.length <= 3)).toBe(true);
    expect(chunks.join("")).toBe("👍👍👍👍👍");
  });

  test("never exceeds maxSize when hard-splitting a long unicode word", () => {
    const chunks = chunkText("👍👍👍👍👍", 3, { preserveOnBreak: "word" });
    expect(chunks.every((chunk) => chunk.length <= 3)).toBe(true);
    expect(chunks.join("")).toBe("👍👍👍👍👍");
  });

  test("never exceeds maxSize when a single grapheme is longer than maxSize", () => {
    const family = "👨‍👩‍👧‍👦";
    expect(family.length).toBeGreaterThan(5);
    const chunks = chunkText(family, 5);
    expect(chunks.every((chunk) => chunk.length <= 5)).toBe(true);
    expect(chunks.join("")).toBe(family);
  });
});
