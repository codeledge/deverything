import { objectSerializer } from "../_internals/objectSerializer";

export const pretty = (arg?: any) => {
  return JSON.stringify(arg, objectSerializer(), 2);
};
