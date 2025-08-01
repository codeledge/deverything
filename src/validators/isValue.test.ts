import { expect, describe, it } from "vitest";
import { isValue } from "./isValue";

describe("isValue", () => {
  it("bool", () => {
    expect(isValue(true)).toBe(true);
    expect(isValue(false)).toBe(true);
  });

  it("voids", () => {
    expect(isValue(void 0)).toBe(false);
    expect(
      isValue(
        (() => {
          return void 0;
        })()
      )
    ).toBe(false);
    expect(isValue(undefined)).toBe(false);
    expect(isValue(null)).toBe(false);
    expect(isValue(NaN)).toBe(false);
    expect(isValue(0 / 0)).toBe(false);
  });

  it("empties", () => {
    expect(isValue("")).toBe(true);
    expect(isValue(0)).toBe(true);
    expect(isValue(0 * 0)).toBe(true);
    expect(isValue(-1)).toBe(true);
    expect(isValue(Infinity)).toBe(true);
  });
});
