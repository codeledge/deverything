import { describe, expect, test } from "@jest/globals";
import { paragraphSeparatorRegex } from "./paragraphSeparatorRegex";

describe("paragraphSeparatorRegex", () => {
  test("args", async () => {
    expect(paragraphSeparatorRegex.test(String.fromCharCode(8233))).toBe(true);
  });
});
