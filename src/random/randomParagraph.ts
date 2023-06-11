import { array } from "../helpers";
import { capitalize } from "../helpers/capitalize";
import { randomInt } from "./randomInt";
import { randomWord } from "./randomWord";

// TODO: add a comma in the middle of the sentence
export const randomParagraph = () => {
  return (
    capitalize(array(randomInt(8, 16), () => randomWord()).join(" ")) + "."
  );
};
