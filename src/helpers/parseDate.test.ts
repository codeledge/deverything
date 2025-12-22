import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { MAX_DATE_MILLISECONDS } from "../constants/time";
import { parseDate } from "./parseDate";
import timezoneMock from "timezone-mock";

// TODO: add string with millis 1678792327650170902
describe("parseDate", () => {
  test("no arg", async () => {
    expect(parseDate()).toBeUndefined();
  });

  test("number", async () => {
    expect(parseDate(0)).toStrictEqual(new Date("1970-01-01T00:00:00.000Z"));
  });

  test("invalid number", async () => {
    expect(parseDate(-MAX_DATE_MILLISECONDS - 1)).toBeUndefined();
    expect(parseDate(MAX_DATE_MILLISECONDS + 1)).toBeUndefined();
  });

  describe("ISO date with non UTC timezone", () => {
    beforeAll(() => {
      // If this test is run in UTC, it will always pass!
      timezoneMock.register("Australia/Adelaide");
    });
    afterAll(() => {
      timezoneMock.unregister();
    });
    test("year", async () => {
      expect(parseDate("2000")!.toISOString()).toStrictEqual(
        new Date("2000-01-01T00:00:00.000+10:30").toISOString()
      );
    });

    test("month", async () => {
      expect(parseDate("2000-14")).toBeUndefined();

      expect(parseDate("2000-02")).toStrictEqual(
        new Date("2000-02-01T00:00:00.000+10:30")
      );
    });

    test("day", async () => {
      expect(parseDate("2000-00-00")).toBeUndefined();
      expect(parseDate("2000-02-32")).toBeUndefined();

      expect(parseDate("2000-02-21")).toStrictEqual(
        new Date("2000-02-21T00:00:00+10:30")
      );

      expect(parseDate("2000-02-21", { asUTC: true })).toStrictEqual(
        new Date("2000-02-21T00:00:00Z")
      );
    });

    test("hours", async () => {
      expect(parseDate("2000-02-02T40:00")).toBeUndefined();

      expect(parseDate("2000-02-21T00:00")).toStrictEqual(
        new Date("2000-02-21T00:00:00.000+10:30")
      );
    });

    test("time", async () => {
      expect(parseDate("2000-02-02T40:00:00")).toBeUndefined();

      expect(parseDate("2000-02-21T00:00:00")).toStrictEqual(
        new Date("2000-02-21T00:00:00.000+10:30")
      );
    });
  });

  describe("ISO date UTC (servers default) <= turns out is not SERVERS DEFAULT HAHA", () => {
    test("year", async () => {
      expect(parseDate("2000", { asUTC: true })).toStrictEqual(
        new Date("2000-01-01T00:00:00.000Z")
      );
    });

    test("month", async () => {
      expect(parseDate("2000-14")).toBeUndefined();

      expect(parseDate("2000-02", { asUTC: true })).toStrictEqual(
        new Date("2000-02-01T00:00:00.000Z")
      );
    });

    test("day", async () => {
      expect(parseDate("2000-00-00")).toBeUndefined();
      expect(parseDate("2000-02-32")).toBeUndefined();

      expect(parseDate("2000-02-21", { asUTC: true })).toStrictEqual(
        new Date("2000-02-21T00:00:00.000Z")
      );
    });
    test("time", async () => {
      expect(parseDate("2000-02-02T40:00:00")).toBeUndefined();

      expect(parseDate("2000-02-21T01", { asUTC: true })).toStrictEqual(
        new Date("2000-02-21T01:00:00.000Z")
      );

      expect(parseDate("2000-02-21T00:01", { asUTC: true })).toStrictEqual(
        new Date("2000-02-21T00:01:00.000Z")
      );

      expect(parseDate("2000-02-21T00:00:01", { asUTC: true })).toStrictEqual(
        new Date("2000-02-21T00:00:01.000Z")
      );

      expect(
        parseDate("2000-02-21T00:00:01.001", { asUTC: true })
      ).toStrictEqual(new Date("2000-02-21T00:00:01.001Z"));

      expect(
        parseDate("2000-02-21T00:00:01.001Z") // no asUTC
      ).toStrictEqual(new Date("2000-02-21T00:00:01.001Z"));

      expect(
        parseDate("2000-02-21T00:00:01.001Z", { asUTC: true }) // asUTC
      ).toStrictEqual(new Date("2000-02-21T00:00:01.001Z"));
    });
  });

  describe("Invalid date formats", () => {
    test("invalid hour (25)", async () => {
      expect(parseDate("2025-01-01T25:00:00Z")).toBeUndefined();
    });

    test("invalid minute (60)", async () => {
      expect(parseDate("2025-01-01T00:60:00Z")).toBeUndefined();
    });

    test("invalid second (60)", async () => {
      expect(parseDate("2025-01-01T00:00:60Z")).toBeUndefined();
    });

    test("invalid timezone offset (+25:00)", async () => {
      expect(parseDate("2025-01-01T00:00:00+25:00")).toBeUndefined();
    });
  });
});
