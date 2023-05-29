import { describe, it, expect } from "@jest/globals";
import { randomDate, randomFutureDate, randomPastDate } from "./randomDate";

describe(`randomDate`, () => {
  it(`default`, () => {
    expect(randomDate().getTime()).toBeGreaterThan(0);
  });
  it(`args`, () => {
    expect(randomDate("2010", "2011").toISOString().substring(0, 3)).toBe(
      "201"
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
