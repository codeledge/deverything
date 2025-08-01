import { describe, it, expect } from "vitest";
import { getDateSeriesRange } from "./getDateSeriesRange";
import { DateLike } from "../types";

describe("getDateSeriesRange", () => {
  it("should return the correct date range for an array of Date objects", () => {
    const dates = [
      new Date("2024-01-15T10:00:00.000Z"),
      new Date("2024-01-10T08:00:00.000Z"),
      new Date("2024-01-20T12:00:00.000Z"),
      new Date("2024-01-05T06:00:00.000Z"),
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-05T06:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should return the correct date range for an array of date strings", () => {
    const dates = [
      "2024-01-15T10:00:00.000Z",
      "2024-01-10T08:00:00.000Z",
      "2024-01-20T12:00:00.000Z",
      "2024-01-05T06:00:00.000Z",
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-05T06:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should return the correct date range for an array of timestamps", () => {
    const dates = [
      1705312800000, // 2024-01-15T10:00:00.000Z
      1704873600000, // 2024-01-10T08:00:00.000Z
      1705752000000, // 2024-01-20T12:00:00.000Z
      1704441600000, // 2024-01-05T06:00:00.000Z
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date(1704441600000));
    expect(result.endDate).toEqual(new Date(1705752000000));
  });

  it("should handle mixed date types", () => {
    const dates = [
      new Date("2024-01-15T10:00:00.000Z"),
      "2024-01-10T08:00:00.000Z",
      1705752000000, // 2024-01-20T12:00:00.000Z
      new Date("2024-01-05T06:00:00.000Z"),
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-05T06:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should handle single date in array", () => {
    const dates = [new Date("2024-01-15T10:00:00.000Z")];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-15T10:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-15T10:00:00.000Z"));
  });

  it("should handle dates in reverse order", () => {
    const dates = [
      new Date("2024-01-20T12:00:00.000Z"),
      new Date("2024-01-15T10:00:00.000Z"),
      new Date("2024-01-10T08:00:00.000Z"),
      new Date("2024-01-05T06:00:00.000Z"),
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-05T06:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should handle dates in correct order", () => {
    const dates = [
      new Date("2024-01-05T06:00:00.000Z"),
      new Date("2024-01-10T08:00:00.000Z"),
      new Date("2024-01-15T10:00:00.000Z"),
      new Date("2024-01-20T12:00:00.000Z"),
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-05T06:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should filter out invalid dates and use valid ones", () => {
    const dates = [
      new Date("2024-01-15T10:00:00.000Z"),
      "invalid-date",
      new Date("2024-01-10T08:00:00.000Z"),
      null as any,
      new Date("2024-01-20T12:00:00.000Z"),
      undefined as any,
    ];

    const result = getDateSeriesRange(dates);

    expect(result.startDate).toEqual(new Date("2024-01-10T08:00:00.000Z"));
    expect(result.endDate).toEqual(new Date("2024-01-20T12:00:00.000Z"));
  });

  it("should throw an error for empty array", () => {
    const dates: DateLike[] = [];

    expect(() => getDateSeriesRange(dates)).toThrow(
      "Cannot find date range for empty array"
    );
  });

  it("should throw an error for array with only invalid dates", () => {
    const dates = ["invalid-date", null as any, undefined as any];

    expect(() => getDateSeriesRange(dates)).toThrow(
      "No valid dates found in array"
    );
  });

  it("should handle dates with different timezones", () => {
    const dates = [
      new Date("2024-01-15T10:00:00+05:00"), // UTC+5
      new Date("2024-01-10T08:00:00-03:00"), // UTC-3
      new Date("2024-01-20T12:00:00+00:00"), // UTC
      new Date("2024-01-05T06:00:00-08:00"), // UTC-8
    ];

    const result = getDateSeriesRange(dates);

    // The function should compare the actual timestamps, not the local times
    expect((result.startDate as Date).getTime()).toBeLessThan(
      (result.endDate as Date).getTime()
    );
  });
});
