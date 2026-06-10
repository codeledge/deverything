import { describe, expect, test } from "vitest";
import { sortBySortedKeys } from "./sortBySortedKeys";

describe("sortBySortedKeys", () => {
  test("sorts by default id field in key order", () => {
    const array = [
      { id: 2, name: "Alice" },
      { id: 1, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];

    expect(sortBySortedKeys(array, [1, 2, 3])).toEqual([
      { id: 1, name: "Bob" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Charlie" },
    ]);
  });

  test("sorts by a custom field", () => {
    const array = [
      { handle: "zoe", id: 1 },
      { handle: "amy", id: 2 },
      { handle: "mia", id: 3 },
    ];

    expect(
      sortBySortedKeys(array, ["amy", "zoe", "mia"], { field: "handle" })
    ).toEqual([
      { handle: "amy", id: 2 },
      { handle: "zoe", id: 1 },
      { handle: "mia", id: 3 },
    ]);
  });

  test("puts values missing from keys at the end in asc order", () => {
    const array = [{ id: 9 }, { id: 1 }, { id: 5 }];

    expect(sortBySortedKeys(array, [1, 5])).toEqual([
      { id: 1 },
      { id: 5 },
      { id: 9 },
    ]);
  });

  test("reverses key order when direction is desc", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(sortBySortedKeys(array, [1, 2, 3], { direction: "desc" })).toEqual([
      { id: 3 },
      { id: 2 },
      { id: 1 },
    ]);
  });

  test("returns a copy when keys is empty", () => {
    const array = [{ id: 2 }, { id: 1 }];

    expect(sortBySortedKeys(array, [])).toEqual(array);
    expect(sortBySortedKeys(array, [])).not.toBe(array);
  });

  test("does not mutate the input array", () => {
    const array = [{ id: 2 }, { id: 1 }];

    sortBySortedKeys(array, [1, 2]);

    expect(array).toEqual([{ id: 2 }, { id: 1 }]);
  });
});
