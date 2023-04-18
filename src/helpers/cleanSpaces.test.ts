import { describe, expect, test } from "@jest/globals";
import { cleanSpaces } from "./cleanSpaces";

describe("cleanSpaces", () => {
  test("args", async () => {
    expect(cleanSpaces(" ")).toBe("");
    expect(cleanSpaces("  ")).toBe("");
    expect(cleanSpaces(" \n ")).toBe("");
    expect(cleanSpaces(" asd  asd ")).toBe("asd asd");
    expect(cleanSpaces("gino\npaoli")).toBe("gino\npaoli");
    expect(cleanSpaces("gino\n paoli")).toBe("gino paoli"); // How to preserve the new line?
  });
});
