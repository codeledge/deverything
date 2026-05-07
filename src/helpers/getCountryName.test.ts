import { describe, expect, test } from "vitest";
import { getCountryName } from "./getCountryName";

describe("getCountryName", () => {
  test("iso2 codes", () => {
    expect(getCountryName("GB")).toBe("United Kingdom");
    expect(getCountryName("US")).toBe("United States");
    expect(getCountryName("FR")).toBe("France");
  });

  test("iso3 codes", () => {
    expect(getCountryName("GBR")).toBe("United Kingdom");
    expect(getCountryName("USA")).toBe("United States");
    expect(getCountryName("FRA")).toBe("France");
  });

  test("case insensitive", () => {
    expect(getCountryName("gb")).toBe("United Kingdom");
    expect(getCountryName("gbr")).toBe("United Kingdom");
  });

  test("falls back to input for unknown codes", () => {
    expect(getCountryName("XX")).toBe("XX");
    expect(getCountryName("XXX")).toBe("XXX");
  });
});
