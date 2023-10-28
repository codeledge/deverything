import { describe, expect, test } from "@jest/globals";
import { getUrlSearchParams } from "./getUrlSearchParams";

describe("getUrlSearchParams", () => {
  test("found", async () => {
    expect(getUrlSearchParams("https")).toStrictEqual({});
    expect(getUrlSearchParams("https://www.ciao.com")).toStrictEqual({});
    expect(getUrlSearchParams("https://www.ciao.com/")).toStrictEqual({});
    expect(getUrlSearchParams("https://www.ciao.com/#")).toStrictEqual({});
    expect(getUrlSearchParams("https://www.ciao.com/?param=")).toStrictEqual({
      param: "",
    });
    expect(
      getUrlSearchParams("https://www.ciao.com/?param1=123&param2=asd")
    ).toStrictEqual({
      param1: "123",
      param2: "asd",
    });
  });
});
