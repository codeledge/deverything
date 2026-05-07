import { describe, expect, test } from "vitest";
import { getCountryName } from "./getCountryName";

describe("getCountryName", () => {
  test("iso2 codes", () => {
    expect(getCountryName("GB")).toBe("United Kingdom");
    expect(getCountryName("Gb")).toBe("United Kingdom");
    expect(getCountryName("gb")).toBe("United Kingdom");
    expect(getCountryName("US")).toBe("United States");
    expect(getCountryName("FR")).toBe("France");
    expect(getCountryName("XX")).toBe("XX");
  });
});
