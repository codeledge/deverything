import { describe, expect, test } from "vitest";
import {
  ARABIC_FIRST_NAMES,
  CYRILLIC_FIRST_NAMES,
  JAPANESE_FIRST_NAMES,
} from "../constants/names";
import { cleanSpaces } from "./cleanSpaces";

describe("cleanSpaces", () => {
  test("args", async () => {
    expect(cleanSpaces(" ")).toBe("");
    expect(cleanSpaces("  ")).toBe("");
    expect(cleanSpaces(" \n ")).toBe("");
    expect(cleanSpaces(" \t ")).toBe("");
    expect(cleanSpaces(" \f ")).toBe("");
    expect(cleanSpaces(" \r ")).toBe("");
    expect(cleanSpaces(" \b ")).toBe("");
    expect(cleanSpaces(" ab\ba")).toBe("ab a"); // TODO \b is not a space technically?
    expect(cleanSpaces(" \v ")).toBe("");
    expect(cleanSpaces("\n")).toBe("");
    expect(cleanSpaces("\t")).toBe("");
    expect(cleanSpaces("\f")).toBe("");
    expect(cleanSpaces("\r")).toBe("");
    expect(
      cleanSpaces(
        String.fromCharCode(8233) + "" + String.fromCharCode(8232) + " a"
      )
    ).toBe("a");
    expect(cleanSpaces("t\na±!@£$%^&*()_`")).toBe("t a±!@£$%^&*()_`");
    expect(cleanSpaces("t\r\na")).toBe("t a");
    expect(cleanSpaces("t\t\ta")).toBe("t a");
    expect(cleanSpaces("t\fa")).toBe("t a");
    expect(cleanSpaces("t\f\b\ba")).toBe("t a");
    expect(cleanSpaces(" asd  asd ")).toBe("asd asd");
    expect(cleanSpaces("gino\npaoli")).toBe("gino paoli");
    expect(cleanSpaces("gino\n \vpaoli")).toBe("gino paoli");
    expect(cleanSpaces("00000")).toBe("00000");
    expect(cleanSpaces(CYRILLIC_FIRST_NAMES[0])).toBe(CYRILLIC_FIRST_NAMES[0]);
    expect(cleanSpaces(JAPANESE_FIRST_NAMES[0])).toBe(JAPANESE_FIRST_NAMES[0]);
    expect(cleanSpaces(ARABIC_FIRST_NAMES[0])).toBe(ARABIC_FIRST_NAMES[0]);
  });
});
