import { describe, expect, test } from "@jest/globals";
import { groupBy } from "./groupBy";

describe("groupBy", () => {
  test("args", async () => {
    expect(groupBy([], "ciao")).toStrictEqual({});
    expect(groupBy([{ id: 1 }, { id: 2 }], "id")).toStrictEqual({
      1: [{ id: 1 }],
      2: [{ id: 2 }],
    });
    expect(
      groupBy(
        [
          { id: 1, m: 2 },
          { id: 2, uuid: 1 },
        ],
        "uuid"
      )
    ).toStrictEqual({
      1: [{ id: 2, uuid: 1 }],
    });
    expect(groupBy([{ id: 1 }, { id: 1 }], "id")).toStrictEqual({
      1: [{ id: 1 }, { id: 1 }],
    });
  });
});
