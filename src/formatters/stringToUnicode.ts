export const stringToUnicode = (text: string): string =>
  Array.from(text)
    .map((char: string) => {
      const codePoint = char.codePointAt(0);
      return codePoint !== undefined ? `\\u{${codePoint.toString(16)}}` : "";
    })
    .join("");
