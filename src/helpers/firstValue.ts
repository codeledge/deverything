import { PlainObject } from "../types";

export const firstValue = (arg: PlainObject): any => Object.values(arg)[0];
