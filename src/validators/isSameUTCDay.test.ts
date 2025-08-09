import { afterAll, beforeAll, describe, expect, test } from "vitest";
import timezoneMock from "timezone-mock";
import { isSameUTCDay } from "./isSameUTCDay";

describe("isSameUTCDay", () => {
  beforeAll(() => {
    // Ensure tests are not dependent on the host machine timezone
    timezoneMock.register("Australia/Adelaide");
  });

  afterAll(() => {
    timezoneMock.unregister();
  });

  test("returns true for same UTC day (Z times)", () => {
    expect(isSameUTCDay("2024-12-02T00:00:00Z", "2024-12-02T23:59:59Z")).toBe(
      true
    );
  });

  test("returns false for different UTC days (Z boundary)", () => {
    expect(isSameUTCDay("2024-12-01T23:59:59Z", "2024-12-02T00:00:00Z")).toBe(
      false
    );
  });

  test("works with local date strings", () => {
    expect(isSameUTCDay("2024-01-01", "2024-01-01")).toBe(true);
    expect(isSameUTCDay("2024-01-01", "2024-01-02")).toBe(false);
  });

  test("handles offsets across boundaries", () => {
    // 2024-12-01T23:00:00-0200 => 2024-12-02T01:00:00Z
    expect(
      isSameUTCDay("2024-12-01T23:00:00-0200", "2024-12-02T01:00:00Z")
    ).toBe(true);
    // 2024-12-01T23:00:00+0200 => 2024-12-01T21:00:00Z (different UTC day than above)
    expect(
      isSameUTCDay("2024-12-01T23:00:00-0200", "2024-12-01T23:00:00+0200")
    ).toBe(false);
  });

  test("returns false when either date is invalid", () => {
    expect(isSameUTCDay("2000-14", "2024-01-01")).toBe(false);
    expect(isSameUTCDay(Number.NaN, "2024-01-01")).toBe(false);
  });
});
