import { describe, it, expect } from "@jest/globals";
import { randomPath } from "./randomPath";

describe(`randomPath`, () => {
  it(`works`, () => {
    expect(randomPath().includes("/")).toBe(true);
  });
});
