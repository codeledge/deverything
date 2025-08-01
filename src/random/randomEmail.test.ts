import { describe, it, expect } from "vitest";
import { randomEmail } from "./randomEmail";

describe(`randomEmail`, () => {
  it(`randomEmail`, () => {
    expect(randomEmail().length).toBeGreaterThan(0);
    expect(randomEmail()).toContain(".");
    expect(randomEmail()).toContain("@");
    expect(randomEmail({ handleSuffix: "_project" })).toContain("_project");
  });
});
