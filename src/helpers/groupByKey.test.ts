import { describe, expect, expectTypeOf, test } from "vitest";
import { groupByKey } from "./groupByKey";

describe("groupByKey", () => {
  test("args", async () => {
    expect(groupByKey([], "ciao")).toStrictEqual({});
    expect(groupByKey([{ id: 1 }, { id: 2 }], "id")).toStrictEqual({
      1: [{ id: 1 }],
      2: [{ id: 2 }],
    });
    expect(
      groupByKey(
        [
          { id: 1, m: 2 },
          { id: 2, uuid: 1 },
        ],
        "uuid"
      )
    ).toStrictEqual({
      1: [{ id: 2, uuid: 1 }],
    });
    expect(groupByKey([{ id: 1 }, { id: 1 }], "id")).toStrictEqual({
      1: [{ id: 1 }, { id: 1 }],
    });
  });
  test("groups by 0 and empty string", async () => {
    expect(groupByKey([{ id: 0 }, { id: "" }], "id")).toStrictEqual({
      0: [{ id: 0 }],
      "": [{ id: "" }],
    });
  });

  test("is keyed by the values of the key, and takes a readonly array", () => {
    const items: readonly { kind: "a" | "b"; n: number }[] = [
      { kind: "a", n: 1 },
      { kind: "b", n: 2 },
    ];
    const groups = groupByKey(items, "kind");
    expectTypeOf(groups).toEqualTypeOf<
      Record<"a" | "b", { kind: "a" | "b"; n: number }[]>
    >();
    expect(groups.a).toStrictEqual([{ kind: "a", n: 1 }]);
  });
});
