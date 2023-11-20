import { describe, it, expect } from "@jest/globals";
import { randomArrayItem } from "./randomArrayItem";
import { array } from "../helpers";

describe(`randomArrayItem`, () => {
  it(`returns no item`, () => {
    expect(randomArrayItem([])).toBe(undefined);
  });
  it(`returns 1 item`, () => {
    expect(randomArrayItem([0])).toBe(0);
    expect(typeof randomArrayItem([0, 1])).toBe("number");
  });
  it(`with weights non 1 sum`, () => {
    const stats: { [key: number]: number } = {
      0: 0,
      1: 0,
    };

    array(100000).forEach(() => {
      const random = randomArrayItem([0, 1], { weights: [22, 23] });
      stats[random]++;
    });
    expect(stats[0]).toBeLessThan(stats[1]);
  });
  it(`with weights 1 sum`, () => {
    const stats: { [key: number]: number } = {
      0: 0,
      1: 0,
      2: 0,
    };

    array(100000).forEach(() => {
      const random = randomArrayItem([0, 1, 2], { weights: [0.1, 0.2, 0.7] });
      stats[random]++;
    });
    expect(stats[0]).toBeLessThan(stats[1]);
    expect(stats[1]).toBeLessThan(stats[2]);
  });
});
