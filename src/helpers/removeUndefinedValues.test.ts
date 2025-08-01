import { expect, test } from "vitest";
import { removeUndefinedValues } from "./removeUndefinedValues";

test("removeUndefinedValues", async () => {
  expect(removeUndefinedValues({})).toEqual({});
  expect(removeUndefinedValues({ a: undefined })).toEqual({});
  expect(removeUndefinedValues({ b: 1, a: undefined, c: null })).toEqual({
    b: 1,
    c: null,
  });
});
