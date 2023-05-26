import { describe, it, expect } from "@jest/globals";
import { randomFutureDate, randomPastDate } from "./randomDate";

describe(`randomFutureDate`, () => {
  it(`default`, () => {
    expect(randomFutureDate().getTime()).toBeGreaterThan(new Date().getTime());
  });
});

describe(`randomPastDate`, () => {
  it(`default`, () => {
    expect(randomPastDate().getTime()).toBeLessThan(new Date().getTime());
  });
});
