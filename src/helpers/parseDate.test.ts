import { describe, expect, test } from "@jest/globals";
import { MAX_DATE_MILLISECONDS } from "../constants/time";
import { parseDate } from "./parseDate";

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

  test("date", async () => {
    expect(parseDate(new Date("2000-01-01"))).toStrictEqual(
      new Date("2000-01-01")
    );

    expect(parseDate(new Date("2000-00-00"))).toBeUndefined();
    expect(parseDate(new Date("2000-02-32"))).toBeUndefined();
  });
});
