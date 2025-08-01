import { mapByKey } from "./mapByKey";
import { PlainObject } from "../types";
import { describe, it, expect } from "vitest";

describe("mapByKey", () => {
  it("should map items by the given key", () => {
    const items = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = mapByKey(items, "id");
    expect(result).toEqual({
      1: { id: 1, name: "Alice" },
      2: { id: 2, name: "Bob" },
    });
  });

  it("should not include items with invalid keys", () => {
    const items = [
      { id: 1, name: "Alice" },
      { id: null, name: "Bob" },
      { id: undefined, name: "Charlie" },
      { name: "Ciuccio" },
    ];
    const result = mapByKey(items, "id");
    expect(result).toEqual({
      1: { id: 1, name: "Alice" },
    });
  });

  it("should handle an empty array", () => {
    const items: PlainObject[] = [];
    const result = mapByKey(items, "id");
    expect(result).toEqual({});
  });

  it("should handle an array with one item", () => {
    const items = [{ id: 1, name: "Alice" }];
    const result = mapByKey(items, "id");
    expect(result).toEqual({
      1: { id: 1, name: "Alice" },
    });
  });

  it("should handle string keys", () => {
    const items = [
      { id: 1, value: "100", [Symbol.for("1")]: 1 },
      { id: 2, value: "200", [String("aasd")]: BigInt(1) },
      { id: 3, value: "200" },
    ];
    const result = mapByKey(items, "value");
    expect(result).toEqual({
      100: { id: 1, value: "100", [Symbol.for("1")]: 1 },
      200: { id: 3, value: "200" },
    });
  });
});
