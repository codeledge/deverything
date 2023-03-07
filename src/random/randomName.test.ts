import { describe, it, expect } from "@jest/globals";
import { randomArrayItem } from "./randomArrayItem";
import { randomHandle, randomName } from "./randomName";

describe(`randomName`, () => {
  it(`randomName`, () => {
    expect(randomName()).toBeDefined();
  });

  it(`randomHandle`, () => {
    expect(randomHandle()).toBeDefined();
  });
});
