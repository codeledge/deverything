import { describe, expect, test } from "vitest";
import { getUrlSearchParams } from "./getUrlSearchParams";

describe("getUrlSearchParams", () => {
  test("no domain", async () => {
    expect(getUrlSearchParams("/")).toStrictEqual({});
    expect(getUrlSearchParams("/?param=")).toStrictEqual({
      param: "",
    });
    expect(getUrlSearchParams("/?param1=123&param2=asd")).toStrictEqual({
      param1: "123",
      param2: "asd",
    });
  });

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
