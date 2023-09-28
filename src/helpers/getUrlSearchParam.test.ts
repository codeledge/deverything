import { describe, expect, test } from "@jest/globals";
import { getUrlSearchParam } from "./getUrlSearchParam";

describe("getUrlSearchParam", () => {
  test("undefined", async () => {
    expect(getUrlSearchParam(undefined, "")).toBeUndefined();
    expect(getUrlSearchParam(undefined, "param")).toBeUndefined();
    expect(getUrlSearchParam("", "param")).toBeUndefined();
    expect(getUrlSearchParam(null, "param")).toBeUndefined();
    expect(getUrlSearchParam(null, "")).toBeUndefined();
    expect(getUrlSearchParam("", "")).toBeUndefined();
    expect(getUrlSearchParam("/", "param")).toBeUndefined();
    expect(getUrlSearchParam("/kaboom=1", "param")).toBeUndefined();
    expect(getUrlSearchParam("hey.com/?kaboom=1", "kaboom")).toBeUndefined();
    expect(getUrlSearchParam("www.hey.com?kaboom=1", "kaboom")).toBeUndefined();
    expect(getUrlSearchParam("localhost?param=1", "param")).toBeUndefined();
    expect(
      getUrlSearchParam("https://www.ciao.com/?param=1", "param2")
    ).toBeUndefined();
    expect(getUrlSearchParam("https://www.ciao.com", "param2")).toBeUndefined();
  });

  test("found", async () => {
    expect(getUrlSearchParam("https://www.ciao.com/?param=", "param")).toBe("");
    expect(getUrlSearchParam("https://www.ciao.com/?param", "param")).toBe("");
    expect(getUrlSearchParam("https://www.ciao.com/?param=1", "param")).toBe(
      "1"
    );
    expect(getUrlSearchParam("http://pippo.com?param=2&param=1", "param")).toBe(
      "2"
    );
    expect(
      getUrlSearchParam("http://localhost/?param=1&param2=2", "param2")
    ).toBe("2");
  });
});
