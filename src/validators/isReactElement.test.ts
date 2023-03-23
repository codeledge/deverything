import { expect, it, describe } from "@jest/globals";
import { isReactElement } from "./isReactElement";

describe("isReactElement", function () {
  it("checks correctly", function () {
    expect(isReactElement("<br />")).toBe(false);
  });
});
