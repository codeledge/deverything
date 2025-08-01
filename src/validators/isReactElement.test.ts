import { expect, it, describe } from "vitest";
import { isReactElement } from "./isReactElement";

describe("isReactElement", () => {
  it("checks correctly", () => {
    expect(isReactElement("<br />")).toBe(false);
  });
});
