import { randomChar } from "../random/randomChar";
import { letterRegex } from "../regex/letterRegex";

export const scrambleText = (str: string): string => {
  return str.replace(letterRegex, () => {
    return randomChar();
  });
};
