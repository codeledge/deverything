import { describe, it, expect } from "@jest/globals";
import { randomFloat } from "./randomFloat";

describe(`randomFloat`, () => {
  it(`default`, () => {
    expect(randomFloat(0, 9, 22).toString().length).toBe(17);
    expect(randomFloat(0, 9, 17).toString().length).toBe(17);
    expect(randomFloat(0, 9, 15).toString().length).toBe(17);
    expect(randomFloat(0, 9, 14).toString().length).toBe(16);
  });
});
