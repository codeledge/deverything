import { test, describe, expect } from "@jest/globals";
import { randomUUID } from "./randomUUID";

describe("randomUUID", () => {
  test(`generates multiple valid ids`, async () => {
    console.log(randomUUID());
    expect(randomUUID()).toBeTruthy();
  });
});
