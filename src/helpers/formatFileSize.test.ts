import { describe, expect, it } from "vitest";
import { formatFileSize } from "./formatFileSize";

describe("formatFileSize", () => {
  it("defaults to KB", () => {
    expect(formatFileSize(2048)).toBe("2 KB");
  });

  it("rounds to the nearest whole unit", () => {
    expect(formatFileSize(1536)).toBe("2 KB"); // 1.5 KB rounds up
    expect(formatFileSize(1480)).toBe("1 KB"); // 1.44 KB rounds down
  });

  it("never returns less than 1 of the unit", () => {
    expect(formatFileSize(0)).toBe("1 KB");
    expect(formatFileSize(10)).toBe("1 KB");
    expect(formatFileSize(0, "B")).toBe("1 B");
  });

  it("formats bytes", () => {
    expect(formatFileSize(500, "B")).toBe("500 B");
  });

  it("formats KB", () => {
    expect(formatFileSize(1024, "KB")).toBe("1 KB");
    expect(formatFileSize(1024 * 10, "KB")).toBe("10 KB");
  });

  it("formats MB", () => {
    expect(formatFileSize(1024 ** 2, "MB")).toBe("1 MB");
    expect(formatFileSize(1024 ** 2 * 5, "MB")).toBe("5 MB");
  });

  it("formats GB", () => {
    expect(formatFileSize(1024 ** 3, "GB")).toBe("1 GB");
    expect(formatFileSize(1024 ** 3 * 2, "GB")).toBe("2 GB");
  });

  it("formats TB", () => {
    expect(formatFileSize(1024 ** 4, "TB")).toBe("1 TB");
    expect(formatFileSize(1024 ** 4 * 3, "TB")).toBe("3 TB");
  });

  it("formats PB", () => {
    expect(formatFileSize(1024 ** 5, "PB")).toBe("1 PB");
    expect(formatFileSize(1024 ** 5 * 4, "PB")).toBe("4 PB");
  });

  it("formats EB", () => {
    expect(formatFileSize(1024 ** 6, "EB")).toBe("1 EB");
    expect(formatFileSize(1024 ** 6 * 2, "EB")).toBe("2 EB");
  });
});
