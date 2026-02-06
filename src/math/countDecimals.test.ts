import { describe, expect, test } from "vitest";
import { countDecimals } from "./countDecimals";

describe("countDecimals", () => {
  test("integers", () => {
    expect(countDecimals(0)).toBe(0);
    expect(countDecimals(1)).toBe(0);
    expect(countDecimals(100)).toBe(0);
    expect(countDecimals(-5)).toBe(0);
  });

  test("decimals", () => {
    expect(countDecimals(1.5)).toBe(1);
    expect(countDecimals(1.23)).toBe(2);
    expect(countDecimals(1.234567)).toBe(6);
    expect(countDecimals(0.1)).toBe(1);
    expect(countDecimals(0.123456789)).toBe(9);
  });

  test("negative decimals", () => {
    expect(countDecimals(-1.5)).toBe(1);
    expect(countDecimals(-1.23)).toBe(2);
    expect(countDecimals(-0.123)).toBe(3);
  });

  test("scientific notation", () => {
    expect(countDecimals(1e-5)).toBe(5);
    expect(countDecimals(1.23e-2)).toBe(4);
    expect(countDecimals(1.5e2)).toBe(0);
  });

  test("edge cases", () => {
    expect(countDecimals(Infinity)).toBe(0);
    expect(countDecimals(-Infinity)).toBe(0);
    expect(countDecimals(NaN)).toBe(0);
  });
});
