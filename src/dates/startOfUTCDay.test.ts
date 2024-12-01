import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { startOfUTCDay } from "./startOfUTCDay";
import timezoneMock from "timezone-mock";

describe("startOfUTCDay", () => {
  beforeAll(() => {
    // If this test is run in UTC, it will always pass!
    timezoneMock.register("Australia/Adelaide");
  });
  afterAll(() => {
    timezoneMock.unregister();
  });
  test("computes the UTC equivalent start of day", async () => {
    expect(startOfUTCDay(new Date("2024-12-01T23:00:00-0200"))).toStrictEqual(
      new Date("2024-12-02T00:00:00.000Z")
    );
    expect(startOfUTCDay(new Date("2024-12-02T01:00:00+0200"))).toStrictEqual(
      new Date("2024-12-01T00:00:00.000Z")
    );
  });
});
