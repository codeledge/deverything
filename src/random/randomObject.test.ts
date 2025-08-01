import { describe, it, expect } from "vitest";
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
