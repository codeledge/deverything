import { describe, expect, test } from "vitest";
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
});
