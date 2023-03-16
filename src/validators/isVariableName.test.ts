import { expect, describe, it } from "@jest/globals";
import { isVariableName } from "./isVariableName";

describe("isVariableName", function () {
  it("checks correctly", function () {
    // no empty strings, symbols, etc.
    expect(isVariableName("a@a.a")).toBe(false);
    expect(isVariableName(" ")).toBe(false);
    // no spaces at the beginning
    expect(isVariableName(" a")).toBe(false);
    // no numbers at the beginning
    expect(isVariableName("0var")).toBe(false);
    // no spaces
    expect(isVariableName("let let")).toBe(false);
    // no keywords
    expect(isVariableName("var")).toBe(false);
    expect(isVariableName("const")).toBe(false);
    expect(isVariableName("let")).toBe(false);
    expect(isVariableName("function")).toBe(false);

    expect(isVariableName("myVar")).toBe(true);
    expect(isVariableName("let_let")).toBe(true);
    expect(
      isVariableName(
        "askjdnalksjndalksjdnladnlunaleknASDASDASDASDLASPDLAPSLDPALSDPLASPDL2345643245345345345345345345"
      )
    ).toBe(true);
  });
});
