import { describe, expect, test } from "@jest/globals";
import { stringify } from "./stringify";

describe("stringify", () => {
  test("mixed", async () => {
    expect(stringify()).toBeUndefined();
    expect(stringify("")).toBe(`""`);
    expect(stringify(true)).toBe("true");
    expect(stringify(0)).toBe("0");
  });
  test("object", async () => {
    expect(stringify({})).toBe("{}");
    expect(stringify({ a: 1 })).toBe(`{\n  "a": 1\n}`);
    const a = { a: 1 };
    // @ts-ignore
    a.b = a;
    expect(stringify(a)).toBe(`{\n  "a": 1,\n  "b": "[Circular ~]"\n}`);
  });
});
