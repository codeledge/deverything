import { describe, expect, test } from "vitest";
import { normalizeString } from "./normalizeString";

describe("normalizeString", () => {
  test("removes diacritical marks", () => {
    expect(normalizeString("Crème  brûlée")).toBe("creme brulee");
    expect(normalizeString(" niñO")).toBe("nino");
    expect(normalizeString("café")).toBe("cafe");
    expect(normalizeString("naïve")).toBe("naive");
    expect(normalizeString("résumé")).toBe("resume");
    expect(normalizeString("Zürich")).toBe("zurich");
    expect(normalizeString("Москва")).toBe("москва"); // Cyrillic remains
    expect(normalizeString("北京")).toBe("北京"); // Chinese remains
  });

  test("converts to lowercase", () => {
    expect(normalizeString("HELLO WORLD")).toBe("hello world");
    expect(normalizeString("CamelCase")).toBe("camelcase");
    expect(normalizeString("UPPERCASE")).toBe("uppercase");
    expect(normalizeString("MiXeD CaSe")).toBe("mixed case");
  });

  test("normalizes spaces", () => {
    expect(normalizeString("  multiple   spaces  ")).toBe("multiple spaces");
    expect(normalizeString("\t\ttabs\t\there\t")).toBe("tabs here");
    expect(normalizeString("line\nbreaks\r\nhere")).toBe("line breaks here");
    expect(normalizeString("   leading and trailing   ")).toBe(
      "leading and trailing"
    );
  });

  test("handles special characters", () => {
    expect(normalizeString("hello@world.com")).toBe("hello@world.com");
    expect(normalizeString("price: $99.99")).toBe("price: $99.99");
    expect(normalizeString("100%")).toBe("100%");
    expect(normalizeString("C++ & Java")).toBe("c++ & java");
    expect(normalizeString("hello-world_test")).toBe("hello-world_test");
  });

  test("handles empty and whitespace-only strings", () => {
    expect(normalizeString("")).toBe("");
    expect(normalizeString("   ")).toBe("");
    expect(normalizeString("\t\n\r")).toBe("");
    expect(normalizeString("\u00A0")).toBe(""); // non-breaking space
  });

  test("handles unicode normalization", () => {
    expect(normalizeString("ﬁ")).toBe("ﬁ"); // ligature remains
    expect(normalizeString("½")).toBe("½"); // fraction remains
    expect(normalizeString("™")).toBe("™"); // trademark remains
    expect(normalizeString("😀")).toBe("😀"); // emoji remains
  });

  test("handles combined diacritics", () => {
    expect(normalizeString("àáâãäå")).toBe("aaaaaa");
    expect(normalizeString("èéêë")).toBe("eeee");
    expect(normalizeString("ìíîï")).toBe("iiii");
    expect(normalizeString("òóôõö")).toBe("ooooo");
    expect(normalizeString("ùúûü")).toBe("uuuu");
    expect(normalizeString("ýÿ")).toBe("yy");
    expect(normalizeString("ñ")).toBe("n");
    expect(normalizeString("ç")).toBe("c");
  });

  test("handles mixed content", () => {
    expect(normalizeString("  José's Café - 50% OFF!  ")).toBe(
      "jose's cafe - 50% off!"
    );
    expect(normalizeString("Björk & Sigur Rós")).toBe("bjork & sigur ros");
    expect(normalizeString("Düsseldorf → München")).toBe(
      "dusseldorf → munchen"
    );
    expect(normalizeString("  Naïve\tRésumé\n2024  ")).toBe(
      "naive resume 2024"
    );
  });

  test("preserves numbers and punctuation", () => {
    expect(normalizeString("123.456")).toBe("123.456");
    expect(normalizeString("test@example.com")).toBe("test@example.com");
    expect(normalizeString("hello, world!")).toBe("hello, world!");
    expect(normalizeString("question?")).toBe("question?");
    expect(normalizeString("[brackets] {braces} (parens)")).toBe(
      "[brackets] {braces} (parens)"
    );
  });

  test("handles very long strings", () => {
    const longString = "À".repeat(1000) + "  " + "É".repeat(1000);
    const expected = "a".repeat(1000) + " " + "e".repeat(1000);
    expect(normalizeString(longString)).toBe(expected);
  });

  test("handles invisible characters", () => {
    expect(normalizeString("hello\u200Bworld")).toBe("hello world"); // zero-width space
    expect(normalizeString("test\u2028text")).toBe("test text"); // line separator
    expect(normalizeString("foo\u2029bar")).toBe("foo bar"); // paragraph separator
    expect(normalizeString("data\u0000value")).toBe("data value"); // null character
  });

  test("real-world examples", () => {
    expect(normalizeString("Señorita María González")).toBe(
      "senorita maria gonzalez"
    );
    expect(normalizeString("François Müller")).toBe("francois muller");
    expect(normalizeString("Łukasz Żółć")).toBe("łukasz zołc"); // Polish letters remain
    expect(normalizeString("Renée O'Connor")).toBe("renee o'connor");
    expect(normalizeString("  Dr.   José   García-López  ")).toBe(
      "dr. jose garcia-lopez"
    );
  });
});
