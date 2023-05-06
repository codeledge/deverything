import { describe, expect, test } from "@jest/globals";
import { randomIP } from "./randomIP";

describe("randomIP", () => {
  test("no args", async () => {
    expect(randomIP()).toContain(".");
  });
});
