import { describe, it, expect } from "vitest";
import { randomPassword } from "./randomPassword";

describe(`randomPassword`, () => {
  it(`no args`, () => {
    expect(randomPassword().length).toBeGreaterThan(1);
    expect(randomPassword({ minChars: 19 }).length).toBeGreaterThanOrEqual(19);
    expect(randomPassword({ maxChars: 20 }).length).toBeLessThanOrEqual(20);
  });
});
