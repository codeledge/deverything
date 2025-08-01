import { describe, it, expect } from "vitest";
import { randomPath } from "./randomPath";

describe(`randomPath`, () => {
  it(`works`, () => {
    expect(randomPath().includes("/")).toBe(true);
  });
});
