import { describe, expect, test } from "vitest";
import { lineSeparatorRegex } from "./lineSeparatorRegex";

describe("lineSeparatorRegex", () => {
  test("args", async () => {
    expect(lineSeparatorRegex.test(String.fromCharCode(8232))).toBe(true);
  });
});
