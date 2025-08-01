import { describe, expect, test } from "vitest";
import { stringToUnicode } from "./stringToUnicode";

describe("stringToUnicode", () => {
  test("converts basic ASCII characters correctly", () => {
    expect(stringToUnicode("Hello")).toBe(
      "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}"
    );
  });

  test("converts space character correctly", () => {
    expect(stringToUnicode(" ")).toBe("\\u{20}");
  });

  test("converts a string with special characters", () => {
    expect(stringToUnicode("!@#$%^&*()_+")).toBe(
      "\\u{21}\\u{40}\\u{23}\\u{24}\\u{25}\\u{5e}\\u{26}\\u{2a}\\u{28}\\u{29}\\u{5f}\\u{2b}"
    );
  });

  test("converts non-ASCII characters (e.g., accented letters)", () => {
    expect(stringToUnicode("éåäö")).toBe("\\u{e9}\\u{e5}\\u{e4}\\u{f6}");
  });

  test("converts emojis correctly", () => {
    expect(stringToUnicode("😀😃😄")).toBe("\\u{1f600}\\u{1f603}\\u{1f604}");
  });

  test("handles an empty string", () => {
    expect(stringToUnicode("")).toBe("");
  });

  test("converts a string with mixed character types", () => {
    expect(stringToUnicode("Aa1!😀")).toBe(
      "\\u{41}\\u{61}\\u{31}\\u{21}\\u{1f600}"
    );
  });

  test("converts characters outside the Basic Multilingual Plane", () => {
    expect(stringToUnicode("𠮷")).toBe("\\u{20bb7}");
  });
});
