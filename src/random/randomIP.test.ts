import { describe, expect, test } from "vitest";
import { randomIP } from "./randomIP";

describe("randomIP", () => {
  test("no args", async () => {
    expect(randomIP()).toContain(".");
  });
});
