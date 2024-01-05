import { DOMAIN_NAMES } from "../constants/domains";
import { randomArrayItem } from "./randomArrayItem";
import { randomHandle } from "./randomHandle";

export const randomEmail = ({
  handle,
  handleSuffix,
}: { handle?: string; handleSuffix?: string } = {}) =>
  `${handle || randomHandle({ suffix: handleSuffix })}@${randomArrayItem(
    DOMAIN_NAMES
  )}`;
