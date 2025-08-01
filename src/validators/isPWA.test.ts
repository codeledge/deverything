import { expect, it, describe } from "vitest";
import { isPWA } from "./isPWA";

describe("isPWA", function () {
  it("checks correctly", function () {
    expect(isPWA()).toBe(false);
  });
});
