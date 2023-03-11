import { describe, it, expect } from "@jest/globals";
import { randomFile } from "./randomFile";

describe(`randomFile`, () => {
  it(`no args`, () => {
    expect(randomFile()).toBeUndefined(); // File is not defined in Node.js
  });
});
