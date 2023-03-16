import { JS_RESERVED_WORDS } from "../constants/words";

// I don't recall exactly why this was useful, probably for CSV exports/Object keys wrapped in quotes?
export const isVariableName = (arg: string) => {
  return (
    !!arg &&
    JS_RESERVED_WORDS.indexOf(arg) === -1 &&
    new RegExp("^[a-zA-Z_$][0-9a-zA-Z_$]*$").test(arg)
  );
};
