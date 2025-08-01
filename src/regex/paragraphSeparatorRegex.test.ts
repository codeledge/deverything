import { describe, expect, test } from "vitest";
import { paragraphSeparatorRegex } from "./paragraphSeparatorRegex";

describe("paragraphSeparatorRegex", () => {
  test("args", async () => {
    expect(paragraphSeparatorRegex.test(String.fromCharCode(8233))).toBe(true);
  });
});
