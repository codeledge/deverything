import { describe, expect, test } from "@jest/globals";
import { serializeObject } from "./serializeObject";

describe("serializeObject", () => {
  test("mixed", async () => {
    expect(serializeObject({ a: 1, b: 1 })).toBe('{"a":1,"b":1}');
    expect(serializeObject({ b: 1, a: 1 })).toBe('{"a":1,"b":1}');
  });
});
