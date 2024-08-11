import { randomInt } from "./randomInt";
import { randomValue } from "./randomValue";
import { array } from "../helpers/array";

export const randomArray = () => {
  return array(randomInt({ min: 1, max: 5 }), randomValue);
};
