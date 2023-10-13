import { array } from "../helpers";
import { randomChar } from "./randomChar";

export const randomString = ({
  length = 10,
}: {
  length?: number;
} = {}) => {
  return array(length, () => randomChar()).join("");
};
