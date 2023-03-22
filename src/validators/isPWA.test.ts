import { expect, it, describe } from "@jest/globals";
import { isPWA } from "./isPWA";

describe("isPWA", function () {
  it("checks correctly", function () {
    expect(isPWA()).toBe(false);
  });
});
