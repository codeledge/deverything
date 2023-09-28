import { describe, it, expect } from "@jest/globals";
import { randomPassword } from "./randomPassword";

describe(`randomPassword`, () => {
  it(`no args`, () => {
    expect(randomPassword().length).toBeGreaterThan(9);
    expect(randomPassword({ minChars: 19 }).length).toBeGreaterThan(19);
  });
});
