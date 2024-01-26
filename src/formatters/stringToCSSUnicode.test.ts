import { describe, expect, test } from "@jest/globals";
import { stringToCSSUnicode } from "./stringToCSSUnicode";

describe("stringToCSSUnicode", () => {
  test("converts basic ASCII characters correctly", () => {
    expect(stringToCSSUnicode("Hello")).toBe("\\48\\65\\6c\\6c\\6f");
  });

  test("converts space character correctly", () => {
    expect(stringToCSSUnicode(" ")).toBe("\\20");
  });

  test("converts a string with special characters", () => {
    expect(stringToCSSUnicode("!@#$%^&*()_+")).toBe(
      "\\21\\40\\23\\24\\25\\5e\\26\\2a\\28\\29\\5f\\2b"
    );
  });

  test("converts non-ASCII characters (e.g., accented letters)", () => {
    expect(stringToCSSUnicode("éåäö")).toBe("\\e9\\e5\\e4\\f6");
  });

  test("converts emojis correctly", () => {
    expect(stringToCSSUnicode("😀😃😄")).toBe("\\1f600\\1f603\\1f604");
  });

  test("handles an empty string", () => {
    expect(stringToCSSUnicode("")).toBe("");
  });

  test("converts a string with mixed character types", () => {
    expect(stringToCSSUnicode("Aa1!😀")).toBe("\\41\\61\\31\\21\\1f600");
  });

  test("converts characters outside the Basic Multilingual Plane", () => {
    expect(stringToCSSUnicode("𠮷")).toBe("\\20bb7");
  });
});
