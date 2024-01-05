import { WESTERN_FIRST_NAMES, WESTERN_LAST_NAMES } from "../constants/names";
import { incrementalId } from "../helpers/incrementalId";
import { randomArrayItem } from "./randomArrayItem";

/**
 *
 * @returns a unique social-like handle
 * @example "john.doe15"
 */
export const randomHandle = ({ suffix }: { suffix?: string } = {}): string =>
  (
    randomArrayItem(WESTERN_FIRST_NAMES) +
    "." +
    randomArrayItem(WESTERN_LAST_NAMES)
  ).toLowerCase() +
  incrementalId() + // process-unique
  (suffix ? suffix : "");
