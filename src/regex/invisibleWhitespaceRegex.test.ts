import { describe, expect, test } from "@jest/globals";
import { invisibleWhitespaceRegex } from "./invisibleWhitespaceRegex";

describe("invisibleWhitespaceRegex", () => {
  test("args", async () => {
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "　"].forEach(
      (char) => {
        expect(invisibleWhitespaceRegex.test(char)).toBe(true);
        invisibleWhitespaceRegex.lastIndex = 0;
      }
    );
  });
});
