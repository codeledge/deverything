import { describe, it, expect } from "@jest/globals";
import { randomEmail } from "./randomEmail";

describe(`randomEmail`, () => {
  it(`randomEmail`, () => {
    expect(randomEmail().length).toBeGreaterThan(0);
    expect(randomEmail()).toContain(".");
    expect(randomEmail()).toContain("@");
  });
});
