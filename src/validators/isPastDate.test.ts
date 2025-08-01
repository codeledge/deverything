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

  describe("with referenceDate", () => {
    it("should return true when date is before referenceDate", () => {
      const referenceDate = new Date("2023-06-01");
      expect(isPastDate("2023-01-01", { referenceDate })).toBe(true);
      expect(isPastDate("2022-12-31", { referenceDate })).toBe(true);
      expect(isPastDate(new Date("2023-05-31"), { referenceDate })).toBe(true);
    });

    it("should return false when date is after or equal to referenceDate", () => {
      const referenceDate = new Date("2023-01-01");
      expect(isPastDate("2023-06-01", { referenceDate })).toBe(false);
      expect(isPastDate("2024-01-01", { referenceDate })).toBe(false);
      expect(isPastDate("2023-01-01", { referenceDate })).toBe(false); // same date
    });

    it("should work with different date formats as referenceDate", () => {
      expect(isPastDate("2022-06-01", { referenceDate: "2023-01-01" })).toBe(
        true
      );
      expect(isPastDate("2022-06-01", { referenceDate: 1672531200000 })).toBe(
        true
      ); // 2023-01-01 timestamp
      expect(isPastDate("2023-06-01", { referenceDate: "2023-01-01" })).toBe(
        false
      );
    });
  });
});
