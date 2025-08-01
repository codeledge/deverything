import { expect, it, describe } from "vitest";
import { isPWA } from "./isPWA";

describe("isPWA", () => {
  it("checks correctly", () => {
    expect(isPWA()).toBe(false);
  });
});
