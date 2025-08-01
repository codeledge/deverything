import { describe, it, expect } from "vitest";
import { randomDate, randomFutureDate, randomPastDate } from "./randomDate";

describe(`randomDate`, () => {
  it(`default`, () => {
    expect(randomDate().getTime()).toBeGreaterThan(0);
  });
  it(`args`, () => {
    expect(
      randomDate({ startDate: "2010", endDate: "2011" })
        .toISOString()
        .substring(0, 3)
    ).toBe("201");
  });
  it(`no start`, () => {
    expect(randomDate({ endDate: "2011" }).getFullYear()).toBeLessThan(2011);
  });
  it(`no end`, () => {
    expect(randomDate({ startDate: "2012" }).getFullYear()).toBeGreaterThan(
      2011
    );
  });
});

describe(`randomFutureDate`, () => {
  it(`default`, () => {
    expect(randomFutureDate().getTime()).toBeGreaterThan(new Date().getTime());
    expect(
      randomFutureDate({
        startDate: "2031",
      }).getTime()
    ).toBeGreaterThan(new Date("2031").getTime());

    const withEndTime = randomFutureDate({
      endDate: "2031",
    }).getTime();
    expect(withEndTime).toBeLessThanOrEqual(new Date("2031").getTime());
    expect(withEndTime).toBeGreaterThanOrEqual(new Date().getTime());
  });
});

describe(`randomPastDate`, () => {
  it(`default`, () => {
    expect(randomPastDate().getTime()).toBeLessThan(new Date().getTime());
    const withStartTime = randomPastDate({
      startDate: "1031",
    }).getTime();
    expect(withStartTime).toBeGreaterThan(new Date("1031").getTime());
    expect(withStartTime).toBeLessThanOrEqual(new Date().getTime());

    const withEndTime = randomPastDate({
      endDate: "1970-01-02",
    }).getTime();
    expect(withEndTime).toBeLessThanOrEqual(new Date("1970-01-02").getTime());
  });
});
