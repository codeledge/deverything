import { describe, it, expect } from "@jest/globals";
import { keysLength } from "../helpers";
import { randomObject } from "./randomObject";

describe(`randomObject`, () => {
  // dir(
  //   randomObject({
  //     circular: true,
  //   })
  // );

  it(`works`, () => {
    expect(keysLength(randomObject())).toBeGreaterThan(0);
  });
});
