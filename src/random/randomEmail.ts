import { DOMAIN_NAMES } from "../constants/domains";
import { randomArrayItem } from "./randomArrayItem";
import { randomHandle } from "./randomHandle";

export const randomEmail = () =>
  `${randomHandle()}@${randomArrayItem(DOMAIN_NAMES)}`;
