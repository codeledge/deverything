import { describe, expect, test } from "@jest/globals";
import { formatNumber } from "./formatNumber";
import { randomInt } from "../random/randomInt";

describe("formatNumber", () => {
  test("should return the same number if test is under a thousand", () => {
    const value = randomInt(0, 999);
    expect(formatNumber(value, { compact: true })).toBe(`${value}`);
  });

  test("should return a string in compact K notation if value is one thousand or above", () => {
    const value = randomInt(1000, 9999);
    expect(formatNumber(value, { compact: true })).toContain("K");
  });

  test("should return a string in compact M notation if value is one million or above", () => {
    const value = randomInt(1000000, 9999999);
    expect(formatNumber(value, { compact: true })).toContain("M");
  });

  test("should return a string with thousand separator but no compact notation", () => {
    const formattedValue = formatNumber(randomInt(1000000, 9999999));
    expect(formattedValue).not.toContain("M");
    expect(formattedValue).toContain(",");
  });

  test("Retains floating point up to 3", () => {
    const formattedValue = formatNumber(123456.123456);
    expect(formattedValue).toEqual("123,456.123");
  });

  describe("Percentage", () => {
    test("no digits", () => {
      const formattedValue = formatNumber(0.123456, { percentage: true });
      expect(formattedValue).toEqual("12%");
    });

    test("digits", () => {
      const formattedValue = formatNumber(0.123456, {
        percentage: true,
        maxDigits: 2,
      });
      expect(formattedValue).toEqual("12.35%");
    });

    test(" digits roundung", () => {
      const formattedValue = formatNumber(0.9999, {
        percentage: true,
      });
      expect(formattedValue).toEqual("100%");
    });

    test("undefined stuff", () => {
      expect(formatNumber(0 / 0, { percentage: true })).toBe(`0%`);
      expect(formatNumber(0 / 10, { percentage: true })).toBe(`0%`);
      expect(formatNumber(10 / 0, { percentage: true })).toBe(`0%`);
    });

    test("defined stuff", () => {
      expect(formatNumber(1 / 10, { percentage: true, maxDigits: 2 })).toBe(
        `10.00%`
      );
      expect(formatNumber(2 / 11, { percentage: true, maxDigits: 1 })).toBe(
        `18.2%`
      );
      expect(formatNumber(2 / 12, { percentage: true })).toBe(`17%`);
    });
  });
});
