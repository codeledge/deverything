import { PHONE_NUMBER_SAMPLES } from "../constants/phoneNumbers";
import { randomArrayItem } from "./randomArrayItem";

export const randomPhoneNumber = () => {
  return randomArrayItem(PHONE_NUMBER_SAMPLES);
};
