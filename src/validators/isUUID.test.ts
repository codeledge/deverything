import { describe, expect, test } from "vitest";
import { isUUID } from "./isUUID";

describe("isUUID", () => {
  test("versions 1 to 8", () => {
    expect(isUUID("c232ab00-9414-11ec-b3c8-9f6bdeced846")).toBe(true); // v1
    expect(isUUID("5df41881-3aed-3515-88a7-2f4a814cf09e")).toBe(true); // v3
    expect(isUUID("919108f7-52d1-4320-9bac-f847db4148a8")).toBe(true); // v4
    expect(isUUID("2ed6657d-e927-568b-95e1-2665a8aea6a2")).toBe(true); // v5
    expect(isUUID("1ec9414c-232a-6b00-b3c8-9f6bdeced846")).toBe(true); // v6
    expect(isUUID("017f22e2-79b0-7cc3-98c4-dc0c0c07398f")).toBe(true); // v7
    expect(isUUID("2489e9ad-2ee2-8e00-8ec9-32d5f69181c0")).toBe(true); // v8
  });

  test("Nil and Max", () => {
    expect(isUUID("00000000-0000-0000-0000-000000000000")).toBe(true);
    expect(isUUID("ffffffff-ffff-ffff-ffff-ffffffffffff")).toBe(true);
    expect(isUUID("FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")).toBe(true);
  });

  test("case-insensitive", () => {
    expect(isUUID("919108F7-52D1-4320-9BAC-F847DB4148A8")).toBe(true);
  });

  test("invalid", () => {
    expect(isUUID("")).toBe(false);
    expect(isUUID("not-a-uuid")).toBe(false);
    expect(isUUID("919108f752d143209bacf847db4148a8")).toBe(false);
    expect(isUUID("919108f7-52d1-0320-9bac-f847db4148a8")).toBe(false); // version 0
    expect(isUUID("919108f7-52d1-9320-9bac-f847db4148a8")).toBe(false); // version 9
    expect(isUUID("919108f7-52d1-4320-7bac-f847db4148a8")).toBe(false); // NCS variant
    expect(isUUID("919108f7-52d1-4320-cbac-f847db4148a8")).toBe(false); // Microsoft variant
    expect(isUUID("00000000-0000-0000-0000-000000000001")).toBe(false);
    expect(isUUID(" 919108f7-52d1-4320-9bac-f847db4148a8")).toBe(false);
  });
});
