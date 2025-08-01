import { describe, it, expect } from "vitest";
import { randomFile } from "./randomFile";

describe(`randomFile`, () => {
  it(`no args`, () => {
    expect(randomFile()).toBeDefined(); // File is now defined in Node.js
  });
});
