import { afterEach, expect, test, vi } from "vitest";
import { copyToClipboard } from "./copyToClipboard";

afterEach(() => {
  vi.unstubAllGlobals();
});

test("copyToClipboard writes the value to the clipboard", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { clipboard: { writeText } });

  await copyToClipboard("hello");

  expect(writeText).toHaveBeenCalledWith("hello");
});

test("copyToClipboard throws when the Clipboard API is unavailable", async () => {
  vi.stubGlobal("navigator", {});

  await expect(copyToClipboard("hello")).rejects.toThrow(
    "Clipboard API is not available in this environment"
  );
});
