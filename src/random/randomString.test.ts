import { describe, it, expect } from "@jest/globals";
import { randomString } from "./randomString";

describe(`randomString`, () => {
  it(`no args`, () => {
    expect(randomString().length).toBe(10);
    expect(randomString({ length: 19 }).length).toBe(19);
  });
});
