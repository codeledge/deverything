import { describe, it, expect } from "@jest/globals";
import { randomParagraph } from "./randomParagraph";

describe(`randomParagraph`, () => {
  it(`no args`, () => {
    console.log(randomParagraph());
    expect(randomParagraph()).toBeDefined();
    expect(randomParagraph().length).toBeTruthy();
    expect(randomParagraph().endsWith(".")).toBeTruthy();
  });
});
