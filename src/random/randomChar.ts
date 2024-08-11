import { randomInt } from "./randomInt";

export const randomChar = () => {
  return String.fromCharCode(randomInt({ min: 97, max: 122 }));
};
