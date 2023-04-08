import { expect, it, describe } from "@jest/globals";
import { isPastDate } from "./isPastDate";

describe("isPastDate", function () {
  it("checks correctly", function () {
    expect(isPastDate("")).toBe(false);
    expect(isPastDate(new Date(new Date().getFullYear() + 1 + ""))).toBe(false);
    expect(isPastDate(new Date())).toBe(false); // too fast

    expect(isPastDate(new Date().getTime() - 1)).toBe(true);
    expect(isPastDate(new Date("2012"))).toBe(true);
  });
});
