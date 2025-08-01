import { describe, expect, test } from "vitest";
import { truncate } from "./truncate";

describe("truncate", () => {
  test("basic functionality", async () => {
    expect(truncate("asd", -Infinity)).toBe("asd");
    expect(truncate("asd", Infinity)).toBe("asd");
    expect(truncate("asd", -1)).toBe("asd");
    expect(truncate("", 0)).toBe("");
    expect(truncate("", 1)).toBe("");
    expect(truncate("1", 1)).toBe("1");
    expect(truncate("12345", 4)).toBe("1...");
    expect(truncate("😴😄😃⛔🎠🚓🚇", 4)).toBe("😴...");
  });
  test("truncation at the start", () => {
    expect(
      truncate("Hello, world!", 8, {
        position: "start",
      })
    ).toBe("...orld!");
    expect(
      truncate("😴😄😃⛔🎠🚓🚇", 6, {
        position: "start",
      })
    ).toBe("...🎠🚓🚇");
  });

  test("truncation in the middle", () => {
    expect(
      truncate("Hello, world!", 11, {
        position: "middle",
      })
    ).toBe("Hell...rld!");
    expect(
      truncate("😴😄😃⛔🎠🚓🚇", 5, {
        position: "middle",
      })
    ).toBe("😴...🚇");
  });

  test("truncation at the end", () => {
    expect(
      truncate("Hello, world!", 10, {
        position: "end",
      })
    ).toBe("Hello, ...");
    expect(
      truncate("😴😄😃⛔🎠🚓🚇", 5, {
        position: "end",
      })
    ).toBe("😴😄...");
  });

  test("custom ellipsis", () => {
    const originalUrl =
      "https://very-long-url.com/path?query=string&anotherParam=value";
    const expectedUrl =
      "https://very-long-url.com[...]string&anotherParam=value";
    expect(
      truncate(originalUrl, 55, {
        ellipsis: "[...]",
        position: "middle",
      })
    ).toBe(expectedUrl);
  });
});
