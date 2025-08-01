import { describe, it, expect } from "vitest";
import { randomHexColor } from "./randomHexColor";

describe(`randomHexColor`, () => {
  it(`no args`, () => {
    expect(randomHexColor().length).toBe(7);
    expect(randomHexColor().startsWith("#")).toBeTruthy();
  });
});
