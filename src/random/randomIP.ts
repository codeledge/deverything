import { randomInt } from "./randomInt";

export const randomIP = () => {
  return `${randomInt(0, 255).toString()}.${randomInt(
    0,
    255
  ).toString()}.${randomInt(0, 255).toString()}.${randomInt(
    0,
    255
  ).toString()}`;
};
