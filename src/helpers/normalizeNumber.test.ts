import { describe, expect, test } from "@jest/globals";
import { normalizeNumber } from "./normalizeNumber";

describe("normalizeNumber", () => {
  test("arg", async () => {
    expect(normalizeNumber({ value: 50, min: 0, max: 100 })).toBe(0.5);
    expect(normalizeNumber({ value: 0, min: 0, max: 10 })).toBe(0);
    expect(normalizeNumber({ value: 10e5, min: 0, max: 10e5 })).toBe(1);
    expect(normalizeNumber({ value: 0, min: 0, max: 0 })).toBe(1);
  });
  test("edge", async () => {
    expect(normalizeNumber({ value: -10, min: 0, max: 10 })).toBe(0);
    expect(normalizeNumber({ value: 10e5, min: 0, max: 10 })).toBe(1);
    expect(normalizeNumber({ value: 0, min: 0, max: 0 })).toBe(1);
  });
});
