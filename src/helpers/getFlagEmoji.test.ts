import { describe, expect, test } from "vitest";
import { getFlagEmoji } from "./getFlagEmoji";

describe("getFlagEmoji", () => {
  test("iso2 codes", () => {
    expect(getFlagEmoji("GB")).toBe("🇬🇧");
    expect(getFlagEmoji("US")).toBe("🇺🇸");
    expect(getFlagEmoji("FR")).toBe("🇫🇷");
  });

  test("case insensitive", () => {
    expect(getFlagEmoji("gb")).toBe("🇬🇧");
    expect(getFlagEmoji("Gb")).toBe("🇬🇧");
  });

  test("returns something odd for unknown codes", () => {
    expect(getFlagEmoji("XX")).toBe("🇽🇽");
  });
});
