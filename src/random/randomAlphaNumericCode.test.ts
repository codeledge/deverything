import { describe, it, expect } from "vitest";
import { randomAlphaNumericCode } from "./randomAlphaNumericCode";

describe(`randomAlphaNumericCode`, () => {
  it(`no 0 or O`, () => {
    expect(randomAlphaNumericCode().split("")).not.toContain("0");
    expect(randomAlphaNumericCode().split("")).not.toContain("O");
  });
  it(`default options`, () => {
    expect(randomAlphaNumericCode().length).toBe(6);
  });
  it(`options`, () => {
    expect(randomAlphaNumericCode({ length: 4 }).length).toBe(4);
    expect(() => randomAlphaNumericCode({ length: -1 })).toThrow();
  });
});
