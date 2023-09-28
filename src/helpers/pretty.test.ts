import { describe, expect, test } from "@jest/globals";
import { pretty } from "./pretty";

describe("pretty", () => {
  test("mixed", async () => {
    expect(pretty()).toBeUndefined();
    expect(pretty("")).toBe(`""`);
    expect(pretty(true)).toBe("true");
    expect(pretty(0)).toBe("0");
  });
  test("object", async () => {
    expect(pretty({})).toBe("{}");
    expect(pretty({ a: 1 })).toBe(`{\n  "a": 1\n}`);
    const a = { a: 1 };
    // @ts-ignore
    a.b = a;
    expect(pretty(a)).toBe(`{\n  "a": 1,\n  "b": "[Circular ~]"\n}`);
  });
});
