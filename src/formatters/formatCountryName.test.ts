import { describe, expect, test } from "vitest";
import { formatCountryName } from "./formatCountryName";

describe("formatCountryName", () => {
  test("resolves alpha-2 codes in English by default", () => {
    expect(formatCountryName("GB")).toBe("United Kingdom");
    expect(formatCountryName("Gb")).toBe("United Kingdom");
    expect(formatCountryName("gb")).toBe("United Kingdom");
    expect(formatCountryName("US")).toBe("United States");
    expect(formatCountryName("FR")).toBe("France");
  });

  test("localises when a locale is provided", () => {
    expect(formatCountryName("DE", { locale: "de" })).toBe("Deutschland");
    expect(formatCountryName("US", { locale: "fr" })).toBe("États-Unis");
  });

  test("falls back to the original input for unknown or invalid codes", () => {
    expect(formatCountryName("XX")).toBe("XX");
    expect(formatCountryName("GBR")).toBe("GBR");
    expect(formatCountryName("")).toBe("");
  });
});
