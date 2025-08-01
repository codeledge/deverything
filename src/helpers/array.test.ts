import { describe, expect, test } from "vitest";
import { array } from "./array";

describe("array", () => {
  test("no arg", async () => {
    expect(array(3)).toStrictEqual([undefined, undefined, undefined]);
  });
});
