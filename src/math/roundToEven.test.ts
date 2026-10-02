import { describe, expect, test } from "vitest";
import { roundToEven } from "./roundToEven";

describe("roundToEven", () => {
  test("leaves even integers unchanged", () => {
    expect(roundToEven(0)).toBe(0);
    expect(roundToEven(720)).toBe(720);
    expect(roundToEven(-4)).toBe(-4);
  });

  test("rounds odd integers up, like Math.round", () => {
    expect(roundToEven(823)).toBe(824);
    expect(roundToEven(1)).toBe(2);
    expect(roundToEven(-3)).toBe(-2);
  });

  test("rounds fractions to the nearest even integer", () => {
    expect(roundToEven(822.857)).toBe(822);
    expect(roundToEven(591.3)).toBe(592);
    expect(roundToEven(-5.2)).toBe(-6);
  });

  test("absorbs floating-point error that flooring would not", () => {
    expect(roundToEven(2139 * (1280 / 2139))).toBe(1280);
  });

  test("never returns -0", () => {
    expect(roundToEven(-0.4)).toBe(0);
    expect(roundToEven(-1)).toBe(0);
  });

  test("applies min before rounding", () => {
    expect(roundToEven(0.3, { min: 2 })).toBe(2);
    expect(roundToEven(0, { min: 2 })).toBe(2);
    expect(roundToEven(0.3, { min: 3 })).toBe(4);
    expect(roundToEven(720, { min: 2 })).toBe(720);
  });

  test("passes NaN and Infinity through", () => {
    expect(roundToEven(NaN)).toBeNaN();
    expect(roundToEven(NaN, { min: 2 })).toBeNaN();
    expect(roundToEven(Infinity)).toBe(Infinity);
  });
});
