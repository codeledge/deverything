import { PlainObject } from "../types";

export const formatTrpcInputQueryString = (input: PlainObject) => {
  return new URLSearchParams({
    input: JSON.stringify(input),
  });
};
