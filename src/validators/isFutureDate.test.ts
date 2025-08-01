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

  describe("with referenceDate", () => {
    it("should return true when date is after referenceDate", () => {
      const referenceDate = new Date("2023-01-01");
      expect(isFutureDate("2023-06-01", { referenceDate })).toBe(true);
      expect(isFutureDate("2024-01-01", { referenceDate })).toBe(true);
      expect(isFutureDate(new Date("2023-12-31"), { referenceDate })).toBe(
        true
      );
    });

    it("should return false when date is before or equal to referenceDate", () => {
      const referenceDate = new Date("2023-06-01");
      expect(isFutureDate("2023-01-01", { referenceDate })).toBe(false);
      expect(isFutureDate("2022-12-31", { referenceDate })).toBe(false);
      expect(isFutureDate("2023-06-01", { referenceDate })).toBe(false); // same date
    });

    it("should work with different date formats as referenceDate", () => {
      expect(isFutureDate("2023-06-01", { referenceDate: "2023-01-01" })).toBe(
        true
      );
      expect(isFutureDate("2023-06-01", { referenceDate: 1672531200000 })).toBe(
        true
      ); // 2023-01-01 timestamp
      expect(isFutureDate("2022-06-01", { referenceDate: "2023-01-01" })).toBe(
        false
      );
    });
  });
});
