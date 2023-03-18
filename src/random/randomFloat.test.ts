import { describe, it, expect } from "@jest/globals";
import { JS_MAX_DIGITS, randomFloat } from "./randomFloat";

describe(`randomFloat`, () => {
  it(`default`, () => {
    expect(
      randomFloat(0, 9, JS_MAX_DIGITS + 2).toString().length - 2
    ).toBeLessThanOrEqual(JS_MAX_DIGITS);
    expect(
      randomFloat(0, 9, JS_MAX_DIGITS).toString().length - 2
    ).toBeLessThanOrEqual(JS_MAX_DIGITS);
    expect(
      randomFloat(0, 9, JS_MAX_DIGITS - 1).toString().length - 2
    ).toBeLessThanOrEqual(JS_MAX_DIGITS - 1);
    expect(randomFloat(0, 9, 0).toString().length - 1).toBe(0);
  });
});
