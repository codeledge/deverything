import { describe, it, expect } from "vitest";
import { randomName } from "./randomName";

describe(`randomName`, () => {
  it(`randomName`, () => {
    expect(randomName().length).toBeGreaterThan(0);
  });
});
