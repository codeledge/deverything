import {
  COMPANY_NAME_SAMPLES,
  Company,
  VAT_REGISTRATION_NUMBER_SAMPLES,
} from "../constants/companies";
import { randomArrayItem } from "./randomArrayItem";

export const randomCompany = (): Company => {
  return {
    name: randomArrayItem(COMPANY_NAME_SAMPLES),
    vatRegNumber: randomArrayItem(VAT_REGISTRATION_NUMBER_SAMPLES),
  };
};
