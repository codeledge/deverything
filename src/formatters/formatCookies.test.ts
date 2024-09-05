import { describe, expect, test } from "@jest/globals";
import { formatCookies } from "./formatCookies";

describe("formatCookies", () => {
  test("should return the same number if test is under a thousand", () => {
    expect(
      formatCookies({
        num: 123,
        bool: true,
        string: "string",
        undef: undefined,
      })
    ).toBe(`num=123; bool=true; string=string;`);
  });
});
