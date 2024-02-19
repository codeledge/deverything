import { describe, it, expect } from "@jest/globals";
import { keysLength } from "../helpers";
import { randomObject } from "./randomObject";

describe(`randomObject`, () => {
  it(`works`, () => {
    expect(keysLength(randomObject())).toBeGreaterThan(0);
  });
});
