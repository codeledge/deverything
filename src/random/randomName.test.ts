import { describe, it, expect } from "@jest/globals";
import { randomName } from "./randomName";

describe(`randomName`, () => {
  it(`randomName`, () => {
    expect(randomName().length).toBeGreaterThan(0);
  });
});
