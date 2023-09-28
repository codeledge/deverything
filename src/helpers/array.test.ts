import { describe, expect, test } from "@jest/globals";
import { array } from "./array";

describe("array", () => {
  test("no arg", async () => {
    expect(array(3)).toStrictEqual([undefined, undefined, undefined]);
  });
});
