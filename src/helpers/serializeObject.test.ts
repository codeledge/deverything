import { describe, expect, test } from "@jest/globals";
import { serializeObject } from "./serializeObject";

describe("serializeObject", () => {
  test("simple", async () => {
    expect(serializeObject({ a: 1, b: 1 })).toBe('{"a":1,"b":1}');
    expect(serializeObject({ b: 1, a: 1 })).toBe('{"a":1,"b":1}');
  });
  test("array", async () => {
    expect(serializeObject({ a: [1, 3, 2], b: 1 })).toBe('{"a":[1,3,2],"b":1}');
  });
  test("nested", async () => {
    expect(serializeObject({ a: { h: 1, g: "1" }, b: 1 })).toBe(
      '{"a":{},"b":1}'
    );
    expect(serializeObject({ b: null, a: 1 })).toBe('{"a":null,"b":1}');
    expect(serializeObject({ b: undefined, a: 1 })).toBe('{"a":null,"b":1}');
  });
});
