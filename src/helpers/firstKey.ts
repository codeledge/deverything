import { PlainObject } from "../types";
import { getKeys } from "./getKeys";

export const firstKey = (arg: PlainObject): string => getKeys(arg)[0];
