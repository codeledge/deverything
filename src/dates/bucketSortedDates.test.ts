import { describe, it, expect } from "vitest";
import { bucketSortedDates } from "./bucketSortedDates";
import { ISODate } from "../types";

describe("bucketSortedDates", () => {
  it("should bucket dates into correct time ranges", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T00:00:00.000Z",
      "2023-01-02T00:00:00.000Z",
      "2023-01-03T00:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00.000Z", // should go to first bucket
      "2023-01-01T23:59:59.999Z", // should go to first bucket
      "2023-01-02T00:00:00.000Z", // should go to second bucket
      "2023-01-02T15:30:00.000Z", // should go to second bucket
      "2023-01-03T00:00:00.000Z", // should go to third bucket
      "2023-01-03T23:59:59.999Z", // should go to third bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T00:00:00.000Z": [
        "2023-01-01T12:00:00.000Z",
        "2023-01-01T23:59:59.999Z",
      ],
      "2023-01-02T00:00:00.000Z": [
        "2023-01-02T00:00:00.000Z",
        "2023-01-02T15:30:00.000Z",
      ],
      "2023-01-03T00:00:00.000Z": [
        "2023-01-03T00:00:00.000Z",
        "2023-01-03T23:59:59.999Z",
      ],
    });
  });

  it("should handle dates that fall exactly on bucket boundaries", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T00:00:00.000Z",
      "2023-01-02T00:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T00:00:00.000Z", // exactly on first bucket start
      "2023-01-01T23:59:59.999Z", // just before second bucket
      "2023-01-02T00:00:00.000Z", // exactly on second bucket start
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T00:00:00.000Z": [
        "2023-01-01T00:00:00.000Z",
        "2023-01-01T23:59:59.999Z",
      ],
      "2023-01-02T00:00:00.000Z": ["2023-01-02T00:00:00.000Z"],
    });
  });

  it("should handle dates outside the bucket range", () => {
    const dateSeries: ISODate[] = [
      "2023-01-02T00:00:00.000Z",
      "2023-01-03T00:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00.000Z", // before first bucket
      "2023-01-02T12:00:00.000Z", // in first bucket
      "2023-01-03T12:00:00.000Z", // in second bucket
      "2023-01-04T12:00:00.000Z", // after last bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-02T00:00:00.000Z": ["2023-01-02T12:00:00.000Z"],
      "2023-01-03T00:00:00.000Z": ["2023-01-03T12:00:00.000Z"],
    });
  });

  it("should handle empty dates array", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T00:00:00.000Z",
      "2023-01-02T00:00:00.000Z",
    ];

    const dates: ISODate[] = [];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T00:00:00.000Z": [],
      "2023-01-02T00:00:00.000Z": [],
    });
  });

  it("should handle empty dateSeries array", () => {
    const dateSeries: ISODate[] = [];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00.000Z",
      "2023-01-02T12:00:00.000Z",
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({});
  });

  it("should handle single bucket", () => {
    const dateSeries: ISODate[] = ["2023-01-01T00:00:00.000Z"];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00.000Z",
      "2023-01-02T12:00:00.000Z",
      "2023-01-03T12:00:00.000Z",
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T00:00:00.000Z": ["2023-01-01T12:00:00.000Z"],
    });
  });

  it("should handle hour-level bucketing", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T10:00:00.000Z",
      "2023-01-01T11:00:00.000Z",
      "2023-01-01T12:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T10:15:30.000Z", // 10:00 bucket
      "2023-01-01T10:45:20.000Z", // 10:00 bucket
      "2023-01-01T11:30:15.000Z", // 11:00 bucket
      "2023-01-01T12:00:00.000Z", // 12:00 bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "hour");

    expect(result).toEqual({
      "2023-01-01T10:00:00.000Z": [
        "2023-01-01T10:15:30.000Z",
        "2023-01-01T10:45:20.000Z",
      ],
      "2023-01-01T11:00:00.000Z": ["2023-01-01T11:30:15.000Z"],
      "2023-01-01T12:00:00.000Z": ["2023-01-01T12:00:00.000Z"],
    });
  });

  it("should handle minute-level bucketing", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T10:00:00.000Z",
      "2023-01-01T10:01:00.000Z",
      "2023-01-01T10:02:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T10:00:30.000Z", // 10:00 bucket
      "2023-01-01T10:01:45.000Z", // 10:01 bucket
      "2023-01-01T10:02:00.000Z", // 10:02 bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "minute");

    expect(result).toEqual({
      "2023-01-01T10:00:00.000Z": ["2023-01-01T10:00:30.000Z"],
      "2023-01-01T10:01:00.000Z": ["2023-01-01T10:01:45.000Z"],
      "2023-01-01T10:02:00.000Z": ["2023-01-01T10:02:00.000Z"],
    });
  });

  it("should handle second-level bucketing", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T10:00:00.000Z",
      "2023-01-01T10:00:01.000Z",
      "2023-01-01T10:00:02.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T10:00:00.500Z", // 10:00:00 bucket
      "2023-01-01T10:00:01.750Z", // 10:00:01 bucket
      "2023-01-01T10:00:02.000Z", // 10:00:02 bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "second");

    expect(result).toEqual({
      "2023-01-01T10:00:00.000Z": ["2023-01-01T10:00:00.500Z"],
      "2023-01-01T10:00:01.000Z": ["2023-01-01T10:00:01.750Z"],
      "2023-01-01T10:00:02.000Z": ["2023-01-01T10:00:02.000Z"],
    });
  });

  it("should handle non-UTC dates", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T00:00:00-05:00", // EST
      "2023-01-02T00:00:00-05:00", // EST
    ];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00-05:00", // EST, should go to first bucket
      "2023-01-02T12:00:00-05:00", // EST, should go to second bucket
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T05:00:00.000Z": ["2023-01-01T17:00:00.000Z"],
      "2023-01-02T05:00:00.000Z": ["2023-01-02T17:00:00.000Z"],
    });
  });

  it("should handle mixed timezone dates", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T04:00:00.000Z",
      "2023-01-02T04:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T04:00:00+01:00", // ignored
      "2023-01-01T04:00:00-01:00", // taken
      "2023-01-01T04:00:00Z", // taken
      "2022-12-31T23:00:00-08:00", // taken
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T04:00:00.000Z": [
        "2023-01-01T05:00:00.000Z",
        "2023-01-01T04:00:00.000Z",
        "2023-01-01T07:00:00.000Z",
      ],
      "2023-01-02T04:00:00.000Z": [],
    });
  });

  it("should handle duplicate dates in input", () => {
    const dateSeries: ISODate[] = [
      "2023-01-01T00:00:00.000Z",
      "2023-01-02T00:00:00.000Z",
    ];

    const dates: ISODate[] = [
      "2023-01-01T12:00:00.000Z",
      "2023-01-01T12:00:00.000Z", // duplicate
      "2023-01-02T12:00:00.000Z",
    ];

    const result = bucketSortedDates(dateSeries, dates, "day");

    expect(result).toEqual({
      "2023-01-01T00:00:00.000Z": [
        "2023-01-01T12:00:00.000Z",
        "2023-01-01T12:00:00.000Z",
      ],
      "2023-01-02T00:00:00.000Z": ["2023-01-02T12:00:00.000Z"],
    });
  });
});
