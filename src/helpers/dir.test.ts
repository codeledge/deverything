import { describe, expect, test } from "@jest/globals";
import { dir } from "./dir";

describe("dir", () => {
  // dir(randomObject({ circular: true }));

  test("return type", async () => {
    expect(dir(undefined)).toBe(undefined);
  });
});
