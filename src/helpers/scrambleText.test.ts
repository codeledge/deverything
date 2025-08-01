import { expect, test } from "vitest";
import { scrambleText } from "./scrambleText";

test("scrambleText", async () => {
  const string = "Hello World, \n how are we?";
  const scrambled = scrambleText(string);
  expect(scrambled).toHaveLength(26);
  expect(scrambled).not.toBe(string);
});
