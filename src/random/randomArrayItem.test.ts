import { describe, it, expect } from "@jest/globals";
import { randomArrayItem } from "./randomArrayItem";

describe(`randomArrayItem`, () => {
  it(`returns no item`, () => {
    expect(randomArrayItem([])).toBe(undefined);
  });
  it(`returns 1 item`, () => {
    expect(randomArrayItem([0])).toBe(0);
    expect(typeof randomArrayItem([0, 1])).toBe("number");
  });
});
