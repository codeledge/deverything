import { describe, expect, test } from "@jest/globals";
import { formatLatin } from "./formatLatin";

const accentString =
  "áéíóúüñ¿¡àâèêëîïôûàãàãçàèéìòóùäöüßáéíóúáéíóúąćęłńóśźżáčďéěíňóřšťúůýžćčđšžáéíóúüαβγδεζηθικλμνξοπρστυφχψωçğıİöşüابتثجحخدذرزسشصضطظعغ";
const latinString = "aeiou";

describe("formatLatin", () => {
  test("should return a-z", () => {
    expect(formatLatin(accentString)).toBe(latinString);
  });
});
