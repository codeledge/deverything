import { describe, expect, test } from "@jest/globals";
import { truncate } from "./truncate";

describe("truncate", () => {
  test("works", async () => {
    expect(truncate("asd", -Infinity)).toBe("asd");
    expect(truncate("asd", Infinity)).toBe("asd");
    expect(truncate("asd", -1)).toBe("asd");
    expect(truncate("", 0)).toBe("");
    expect(truncate("", 1)).toBe("");
    expect(truncate("1", 1)).toBe("1");
    expect(truncate("1 ", 1)).toBe("1...");
    expect(truncate("😴😄😃⛔🎠🚓🚇", 4)).toBe("😴😄😃⛔...");
  });
});
