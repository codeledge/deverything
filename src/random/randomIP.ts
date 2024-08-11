import { array } from "../helpers/array";
import { randomInt } from "./randomInt";

export const randomIP = () => {
  return array(4, () => randomInt({ min: 0, max: 255 }).toString()).join(".");
};
