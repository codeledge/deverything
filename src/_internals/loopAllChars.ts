export const loopAllChars = (
  callback: (char: string, charcode: number) => void
) => {
  let charcode = 1;
  let char;
  while (char !== "\x00") {
    char = String.fromCharCode(charcode);
    callback(char, charcode);
    charcode += 1;
  }
};
