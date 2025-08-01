import { expect, it, describe } from "vitest";
import { isFutureDate } from "./isFutureDate";

describe("isFutureDate", () => {
  it("true", () => {
    expect(isFutureDate(new Date("3012"))).toBe(true);
    expect(isFutureDate(new Date("3012-11-11"))).toBe(true);
    expect(isFutureDate(new Date().getTime() + 1)).toBe(true);
    expect(isFutureDate(new Date(String(new Date().getFullYear() + 1)))).toBe(
      true
    );
  });

  it("false", () => {
    expect(isFutureDate(0)).toBe(false);
    expect(isFutureDate(new Date("1012-11-11"))).toBe(false);
    expect(isFutureDate(22220)).toBe(false);
    expect(isFutureDate(new Date().getTime() - 1)).toBe(false);
    expect(isFutureDate(new Date())).toBe(false); // too fast
    expect(isFutureDate(new Date().getTime())).toBe(false);
  });
});
