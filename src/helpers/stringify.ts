import { objectSerializer } from "../_internals/objectSerializer";

export const stringify = (arg?: any) => {
  return JSON.stringify(arg, objectSerializer(), 2);
};
