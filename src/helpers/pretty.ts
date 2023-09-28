import { objectSerializer } from "../_internals/objectSerializer";

// TODO: deprecate and rename to stringify
export const pretty = (arg?: any) => {
  return JSON.stringify(arg, objectSerializer(), 2);
};
