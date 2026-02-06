import { describe, expect, test } from "vitest";
import { countDecimalPlaces } from "./countDecimalPlaces";

describe("countDecimalPlaces", () => {
  test("integers", () => {
    expect(countDecimalPlaces(0)).toBe(0);
    expect(countDecimalPlaces(1)).toBe(0);
    expect(countDecimalPlaces(100)).toBe(0);
    expect(countDecimalPlaces(-5)).toBe(0);
  });

  test("decimals", () => {
    expect(countDecimalPlaces(1.5)).toBe(1);
    expect(countDecimalPlaces(1.23)).toBe(2);
    expect(countDecimalPlaces(1.234567)).toBe(6);
    expect(countDecimalPlaces(0.1)).toBe(1);
    expect(countDecimalPlaces(0.123456789)).toBe(9);
  });

  test("negative decimals", () => {
    expect(countDecimalPlaces(-1.5)).toBe(1);
    expect(countDecimalPlaces(-1.23)).toBe(2);
    expect(countDecimalPlaces(-0.123)).toBe(3);
  });

  test("scientific notation", () => {
    expect(countDecimalPlaces(1e-5)).toBe(5);
    expect(countDecimalPlaces(1.23e-2)).toBe(4);
    expect(countDecimalPlaces(1.5e2)).toBe(0);
  });

  test("edge cases", () => {
    expect(countDecimalPlaces(Infinity)).toBe(0);
    expect(countDecimalPlaces(-Infinity)).toBe(0);
    expect(countDecimalPlaces(NaN)).toBe(0);
  });
});
