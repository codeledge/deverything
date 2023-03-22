import { IBAN_SAMPLES } from "../constants/banking";
import { randomArrayItem } from "./randomArrayItem";

export const randomIBAN = () => {
  return randomArrayItem(IBAN_SAMPLES);
};
