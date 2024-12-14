import { expect, describe, test } from "@jest/globals";
import { setUrlSearchParams } from "./setUrlSearchParams";

describe("setUrlSearchParams", () => {
  test("no nullish", () => {
    expect(
      setUrlSearchParams("/signin?token#hash", { n: null, u: undefined, z: 0 })
    ).toBe("/signin?token=&z=0#hash");
  });

  test("relative url", () => {
    expect(setUrlSearchParams("/signin")).toBe("/signin");
    expect(setUrlSearchParams("/signin/", { ok: true })).toBe(
      "/signin/?ok=true"
    );
    expect(setUrlSearchParams("/signin/", {})).toBe("/signin/");
    expect(setUrlSearchParams("/signin?")).toBe("/signin");
    expect(setUrlSearchParams("/signin?in")).toBe("/signin?in");
    expect(setUrlSearchParams("/signin?in#sec")).toBe("/signin?in#sec");
    expect(setUrlSearchParams("/signin?in#sec", { UPPER: "CASE" })).toBe(
      "/signin?in=&UPPER=CASE#sec"
    );
    expect(
      setUrlSearchParams("/signin?in#sec", {
        and: "&",
        equals: "=",
        filter: { date: "2024" },
      })
    ).toBe(
      "/signin?in=&and=%26&equals=%3D&filter=%7B%22date%22%3A%222024%22%7D#sec"
    );
  });

  test("ip", () => {
    expect(setUrlSearchParams("http://127.127.127.127", {})).toBe(
      "http://127.127.127.127/"
    );

    expect(setUrlSearchParams("http://127.127.127.127/ok", {})).toBe(
      "http://127.127.127.127/ok"
    );
    expect(
      setUrlSearchParams("http://127.127.127.127/ok?go", { ng: true })
    ).toBe("http://127.127.127.127/ok?go=&ng=true");
  });

  test("abs url", () => {
    expect(setUrlSearchParams("http://localhost", {})).toBe(
      "http://localhost/"
    );
    expect(setUrlSearchParams("http://dev.dev/hop", { ciao: "tu" })).toBe(
      "http://dev.dev/hop?ciao=tu"
    );
    expect(
      setUrlSearchParams("https://secure.gong/?ciao=tu", { ciao: "tu" })
    ).toBe("https://secure.gong/?ciao=tu");
    expect(
      setUrlSearchParams("http://localhost/?ciao=tu", { ciao: "tu", a: "b" })
    ).toBe("http://localhost/?ciao=tu&a=b");
    expect(
      setUrlSearchParams("http://localhost/?ciao=tu", { ciao: "tu", a: "" })
    ).toBe("http://localhost/?ciao=tu&a=");
    expect(
      setUrlSearchParams("http://localhost/?ciao=tu", { ciao: "tu", a: 1 })
    ).toBe("http://localhost/?ciao=tu&a=1");
    expect(
      setUrlSearchParams("http://localhost/?kikko=tu#", { ciao: "tu", a: 1 })
    ).toBe("http://localhost/?kikko=tu&ciao=tu&a=1#");
    expect(setUrlSearchParams("http://localhost/?over=1", { over: "2" })).toBe(
      "http://localhost/?over=2"
    );
  });
});
