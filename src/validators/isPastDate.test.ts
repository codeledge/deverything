import { expect, it, describe } from "vitest";
import { isPastDate } from "./isPastDate";

describe("isPastDate", () => {
  it("true", () => {
    expect(isPastDate(new Date().getTime() - 1)).toBe(true);
    expect(isPastDate(new Date("2012"))).toBe(true);
    expect(isPastDate(22220)).toBe(true);
  });

  it("false", () => {
    expect(isPastDate(new Date(String(new Date().getFullYear() + 1)))).toBe(
      false
    );
    expect(isPastDate(new Date())).toBe(false); // too fast
    expect(isPastDate(new Date().getTime())).toBe(false);
    expect(isPastDate(new Date().getTime() + 1)).toBe(false);
  });
});
