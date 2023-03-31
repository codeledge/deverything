import { describe, it, expect } from "@jest/globals";
import { randomNumericCode } from "./randomNumericCode";
import { array } from "../helpers/array";

describe(`randomNumericCode`, () => {
  console.log(array(12, randomNumericCode));
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
