import { BANK_ACCOUNT_SAMPLES } from "../constants/banking";
import { randomArrayItem } from "./randomArrayItem";

export const randomBankAccount = () => {
  return randomArrayItem(BANK_ACCOUNT_SAMPLES);
};
