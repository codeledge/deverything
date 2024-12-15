import { describe, it, expect } from "@jest/globals";
import { getDateSeries } from "./getDateSeries";

describe("getDateSeries", () => {
  it("should return a series of dates as ISO strings for days", () => {
    const startDate = new Date("2024-01-01");
    const endDate = new Date("2024-01-05");
    const unit = "days";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-02T00:00:00.000Z",
      "2024-01-03T00:00:00.000Z",
      "2024-01-04T00:00:00.000Z",
      "2024-01-05T00:00:00.000Z",
    ]);
  });

  it("should handle a series for hours", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T03:00:00.000Z");
    const unit = "hours";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T01:00:00.000Z",
      "2024-01-01T02:00:00.000Z",
      "2024-01-01T03:00:00.000Z",
    ]);
  });

  it("should handle a series for minutes", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:05:00.000Z");
    const unit = "minutes";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T00:01:00.000Z",
      "2024-01-01T00:02:00.000Z",
      "2024-01-01T00:03:00.000Z",
      "2024-01-01T00:04:00.000Z",
      "2024-01-01T00:05:00.000Z",
    ]);
  });

  it("should handle a series for seconds", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:00:05.000Z");
    const unit = "seconds";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T00:00:01.000Z",
      "2024-01-01T00:00:02.000Z",
      "2024-01-01T00:00:03.000Z",
      "2024-01-01T00:00:04.000Z",
      "2024-01-01T00:00:05.000Z",
    ]);
  });

  it("should return an empty array if startDate is after endDate", () => {
    const startDate = new Date("2024-01-05");
    const endDate = new Date("2024-01-01");
    const unit = "days";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual([]);
  });

  it("should handle a single date range", () => {
    const startDate = new Date("2024-01-01T00:00:00.000Z");
    const endDate = new Date("2024-01-01T00:00:00.000Z");
    const unit = "days";

    const result = getDateSeries(startDate, endDate, unit);

    expect(result).toEqual(["2024-01-01T00:00:00.000Z"]);
  });
});
