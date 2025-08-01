import {describe, expect, test} from "vitest"
import {capitalize} from "./capitalize";

describe("capitalize", () => {
  test("args", async () => {
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("Test")).toBe("Test");
    expect(capitalize("tEST")).toBe("Test");
    expect(capitalize("TEST")).toBe("Test");
    expect(capitalize("TEST Test")).toBe("Test test");
  })
})