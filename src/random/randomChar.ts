import { randomInt } from "./randomInt";

export const randomChar = () => {
  return String.fromCharCode(randomInt(97, 122));
};
