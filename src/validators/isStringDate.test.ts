import { describe, expect, test } from "vitest";
import { isStringDate } from "./isStringDate";

describe("isStringDate", () => {
  test("false, although ISO date", async () => {
    expect(isStringDate("2000-02-32")).toBeFalsy(); // Invalid date
    expect(isStringDate("2000-01-01 11")).toBeFalsy();
    expect(isStringDate("20181018T080430Z")).toBeFalsy(); // Compact
    expect(isStringDate("2018-W42")).toBeFalsy(); // Week
    expect(isStringDate("2018-W42-4")).toBeFalsy(); // Date with week number
    expect(isStringDate("2018-291")).toBeFalsy(); // Ordinal date
  });

  test("true", async () => {
    expect(isStringDate("2000")).toBeTruthy(); // year
    expect(isStringDate("2000-01")).toBeTruthy(); // month
    expect(isStringDate("2000-01-01")).toBeTruthy(); // Date
    expect(isStringDate("2000-02-31")).toBeTruthy(); // Invalid Calendar Date, but is parsable to next day
    expect(isStringDate("2000-01-01 11:11")).toBeTruthy(); // Date Hour minute
    expect(isStringDate("2000-01-01 11:11:11")).toBeTruthy(); // Date Hour minute second
    expect(isStringDate("2000-01-01 11:11:11.001")).toBeTruthy(); // Date Hour minute second millisecond
    expect(isStringDate("2018-10-18T08:04:30+00:00")).toBeTruthy(); // Combined date and time in UTC
    expect(isStringDate("2018-10-18T08:04:30Z")).toBeTruthy(); // Full
    expect(isStringDate("--10-18")).toBeTruthy(); // Date without year (last in ISO8601:2000, in use by RFC 6350[2])
  });
});
