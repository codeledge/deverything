import { array } from "../helpers/array";
import { randomInt } from "./randomInt";

export const randomIP = () => {
  return array(4, () => randomInt(0, 255).toString()).join(".");
};
