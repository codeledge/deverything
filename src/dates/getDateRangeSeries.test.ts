import { describe, it, expect } from "@jest/globals";
import { getDateRangeSeries } from "./getDateRangeSeries";

describe("getDateRangeSeries", () => {
  it("should return a series of dates as ISO strings for days", () => {
    const startDate = new Date("2024-01-01");
    const endDate = new Date("2024-01-05");
    const unit = "days";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-02T00:00:00.000Z",
      "2024-01-03T00:00:00.000Z",
      "2024-01-04T00:00:00.000Z",
    ]);
  });

  it("should preserve timezone", async () => {
    const startDate = new Date("2024-01-01T00:00:00+1030");
    const endDate = new Date("2024-01-05T00:00:00+1030");
    const unit = "days";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([
      "2023-12-31T13:30:00.000Z",
      "2024-01-01T13:30:00.000Z",
      "2024-01-02T13:30:00.000Z",
      "2024-01-03T13:30:00.000Z",
    ]);
  });

  it("should handle a series for hours", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T03:00:00.000Z");
    const unit = "hours";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T01:00:00.000Z",
      "2024-01-01T02:00:00.000Z",
    ]);
  });

  it("should handle a series for minutes", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:05:00.000Z");
    const unit = "minutes";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T00:01:00.000Z",
      "2024-01-01T00:02:00.000Z",
      "2024-01-01T00:03:00.000Z",
      "2024-01-01T00:04:00.000Z",
    ]);
  });

  it("should handle a series for seconds", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:00:05.000Z");
    const unit = "seconds";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T00:00:01.000Z",
      "2024-01-01T00:00:02.000Z",
      "2024-01-01T00:00:03.000Z",
      "2024-01-01T00:00:04.000Z",
    ]);
  });

  it("should throw an error if startDate is after endDate", () => {
    const startDate = new Date("2024-01-05");
    const endDate = new Date("2024-01-01");
    const unit = "days";

    expect(() => getDateRangeSeries({ startDate, endDate }, unit)).toThrow();
  });

  it("should handle a single date range", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:00:00.000Z");
    const unit = "days";

    const result = getDateRangeSeries({ startDate, endDate }, unit);

    expect(result).toEqual([]);
  });
});
