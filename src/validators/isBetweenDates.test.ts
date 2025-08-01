import { expect, it, describe } from "vitest";
import { isBetweenDates } from "./isBetweenDates";

describe("isBetweenDates", () => {
  const dateRange = { startDate: "2023-01-01", endDate: "2023-12-31" };

  it("should return true when date is between start and end dates", () => {
    expect(isBetweenDates("2023-06-15", dateRange)).toBe(true);
    expect(isBetweenDates("2023-07-04", dateRange)).toBe(true);
    expect(
      isBetweenDates(new Date("2023-06-15"), {
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-12-31"),
      })
    ).toBe(true);
  });

  it("should return true when date equals start or end date (inclusive)", () => {
    expect(isBetweenDates("2023-01-01", dateRange)).toBe(true);
    expect(isBetweenDates("2023-12-31", dateRange)).toBe(true);
  });

  it("should return false when date is outside the range", () => {
    expect(isBetweenDates("2022-12-31", dateRange)).toBe(false);
    expect(isBetweenDates("2024-01-01", dateRange)).toBe(false);
  });

  describe("edge cases", () => {
    it("should work with different date formats", () => {
      expect(
        isBetweenDates("2023-06-15", {
          startDate: 1672531200000, // 2023-01-01 timestamp
          endDate: "2023-12-31",
        })
      ).toBe(true);
      expect(
        isBetweenDates(new Date("2023-06-15"), {
          startDate: "2023-01-01",
          endDate: new Date("2023-12-31"),
        })
      ).toBe(true);
    });

    it("should return false for invalid dates", () => {
      expect(isBetweenDates("invalid-date", dateRange)).toBe(false);
      expect(
        isBetweenDates("2023-06-15", {
          startDate: "invalid-start",
          endDate: "2023-12-31",
        })
      ).toBe(false);
      expect(
        isBetweenDates("2023-06-15", {
          startDate: "2023-01-01",
          endDate: "invalid-end",
        })
      ).toBe(false);
      expect(
        isBetweenDates("2023-06-15", {
          startDate: "2023-01-01",
          endDate: null as any,
        })
      ).toBe(false);
    });

    it("should handle same start and end dates", () => {
      const sameRange = { startDate: "2023-01-01", endDate: "2023-01-01" };
      expect(isBetweenDates("2023-01-01", sameRange)).toBe(true);
      expect(isBetweenDates("2023-01-02", sameRange)).toBe(false);
    });

    it("should handle time precision", () => {
      const timeRange = {
        startDate: "2023-06-15T10:00:00.000Z",
        endDate: "2023-06-15T14:00:00.000Z",
      };

      expect(isBetweenDates("2023-06-15T12:00:00.000Z", timeRange)).toBe(true);
      expect(isBetweenDates("2023-06-15T09:00:00.000Z", timeRange)).toBe(false);
      expect(isBetweenDates("2023-06-15T15:00:00.000Z", timeRange)).toBe(false);
    });
  });
});
