import { randomArrayItem } from "./randomArrayItem";
import { randomBool } from "./randomBool";
import { randomDate } from "./randomDate";
import { randomInt } from "./randomInt";
import { randomString } from "./randomString";

export const randomValue = () => {
  return randomArrayItem([
    randomBool(),
    randomString(),
    randomInt(),
    randomDate(),
    undefined,
    null,
  ]);
};
