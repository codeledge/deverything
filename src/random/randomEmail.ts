import { DOMAIN_NAMES } from "../constants/domains";
import { randomArrayItem } from "./randomArrayItem";
import { randomHandle } from "./randomName";

//Use randomId() to generate a unique email
export const randomEmail = () =>
  `${randomHandle()}@${randomArrayItem(DOMAIN_NAMES)}`;
