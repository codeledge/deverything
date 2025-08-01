import { describe, it, expect } from "vitest";
import { randomNumericCode } from "./randomNumericCode";

describe(`randomNumericCode`, () => {
  it(`starts not with 0`, () => {
    expect(randomNumericCode()[0]).not.toBe(0);
  });
  it(`default options`, () => {
    expect(randomNumericCode().length).toBe(6);
  });
  it(`options`, () => {
    expect(randomNumericCode({ length: 4 }).length).toBe(4);
    expect(() => randomNumericCode({ length: -1 })).toThrow();
  });
});
