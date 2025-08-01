import { describe, expect, test } from "vitest";
import { serialize } from "./serialize";
import { PRIMITIVES_OBJECT } from "../constants/primitives";
import { omit } from "./omit";

describe("serialize", () => {
  test("simple", async () => {
    expect(serialize({ a: 1, b: 1 })).toBe('{"a":1,"b":1}');
    expect(serialize({ b: 1, a: 1 })).toBe('{"a":1,"b":1}');
  });
  test("array", async () => {
    expect(serialize({ a: [1, 3, 2], b: 1 })).toBe('{"a":[1,3,2],"b":1}');
  });
  test("nested", async () => {
    expect(serialize(omit(PRIMITIVES_OBJECT, ["bigInt"]))).toBe(
      '{"arr":[1,2,3],"bool":true,"date":"2016-04-28T22:02:17.000Z","exp":10000000000000,"inf":null,"map":{},"nil":null,"num":0,"obj":{"foo":"foo"},"re":{},"set":{},"str":"string"}'
    );
    expect(serialize({ a: { h: Infinity, g: "1" }, b: 1 })).toBe(
      '{"a":{"g":"1","h":null},"b":1}'
    );

    expect(serialize({ b: null, a: 1 })).toBe('{"a":1,"b":null}');
    expect(serialize({ b: undefined, a: 1 })).toBe('{"a":1}');
  });
});
