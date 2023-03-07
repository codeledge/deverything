import { randomInt } from "./randomInt";

export const randomArrayItem = <T>(array: T[]): T => {
  return array[randomInt(0, array.length - 1)];
};
