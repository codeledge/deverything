import { describe, expect, test } from "@jest/globals";
import { normalizeNumber } from "./normalizeNumber";

describe("normalizeNumber", () => {
  test("arg", async () => {
    expect(normalizeNumber({ val: 50, min: 0, max: 100 })).toBe(0.5);
    expect(normalizeNumber({ val: 0, min: 0, max: 10 })).toBe(0);
    expect(normalizeNumber({ val: 10e5, min: 0, max: 10e5 })).toBe(1);
    expect(normalizeNumber({ val: 0, min: 0, max: 0 })).toBe(NaN);
  });
});
