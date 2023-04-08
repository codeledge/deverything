import { expect, it, describe } from "@jest/globals";
import { isFutureDate } from "./isFutureDate";

describe("isFutureDate", function () {
  it("checks correctly", function () {
    expect(isFutureDate("")).toBe(false);
    expect(isFutureDate(new Date(new Date().getFullYear() - 1 + ""))).toBe(
      false
    );
    expect(isFutureDate(new Date())).toBe(false); // too fast

    expect(isFutureDate(new Date().getTime() + 1)).toBe(true);
    expect(isFutureDate(new Date("3012-11"))).toBe(true);
  });
});
