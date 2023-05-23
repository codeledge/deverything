import { expect, it, describe } from "@jest/globals";
import { isPastDate } from "./isPastDate";

describe("isPastDate", function () {
  it("true", function () {
    expect(isPastDate(new Date().getTime() - 1)).toBe(true);
    expect(isPastDate(new Date("2012"))).toBe(true);
    expect(isPastDate(22220)).toBe(true);
    expect(isPastDate(12220.234)).toBe(true);
  });

  it("false", function () {
    expect(isPastDate(new Date(new Date().getFullYear() + 1 + ""))).toBe(false);
    expect(isPastDate(new Date())).toBe(false); // too fast
    expect(isPastDate(new Date().getTime())).toBe(false);
    expect(isPastDate(new Date().getTime() + 1)).toBe(false);
  });
});
