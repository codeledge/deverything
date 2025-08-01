import { describe, expect, test } from "vitest";
import { isBuffer } from "./isBuffer";

describe("isBuffer", () => {
  test("mixed", async () => {
    const buffer = Buffer.from("test");
    expect(isBuffer(buffer)).toBe(true);

    const arraybuffer = new Uint8Array([1, 2, 3]).buffer;
    expect(isBuffer(arraybuffer)).toBe(false);

    const notBuffer = { byteLength: 3, slice: () => {} };
    expect(isBuffer(notBuffer)).toBe(false);
  });
});
