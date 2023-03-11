import { array } from "../helpers";
import { capitalize } from "../helpers/capitalize";
import { randomWord } from "./randomWord";

export const randomParagraph = () => {
  return capitalize(array(8, () => randomWord()).join(" ")) + ".";
};
