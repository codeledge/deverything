import { randomArrayItem } from "./randomArrayItem";
import { randomBool } from "./randomBool";
import { randomDate } from "./randomDate";
import { randomBigInt, randomInt } from "./randomInt";
import { randomString } from "./randomString";
import { randomSymbol } from "./randomSymbol";

// This must return true with `isValue` assertion
export const randomValue = () => {
  return randomArrayItem([
    randomBool(),
    randomString(),
    randomInt(),
    randomDate(),
    randomBigInt(),
    randomSymbol(),
  ]);
};
