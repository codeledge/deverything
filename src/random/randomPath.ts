import { array } from "../helpers";
import { randomWord } from "./randomWord";

export const randomPath = ({
  depth = 3,
}: {
  depth?: number;
} = {}) => {
  return array(depth, randomWord).join("/");
};
