import { isPositiveInt } from "../validators/isNumber";

export const truncate = (
  arg: string,
  limit: number,
  ellipsis = "...",
  position: "start" | "middle" | "end" = "end"
) => {
  if (!isPositiveInt(limit)) return arg;

  const argArray = [...arg]; // convert string to array, emoji and unicode safe

  if (argArray.length <= limit) return arg;

  switch (position) {
    case "start":
      return ellipsis + argArray.slice(-limit).join("");
    case "middle": {
      const startSliceLength = Math.floor(limit / 2);
      const endSliceStart = argArray.length - Math.floor(limit / 2);
      return (
        argArray.slice(0, startSliceLength).join("") +
        ellipsis +
        argArray.slice(endSliceStart).join("")
      );
    }
    case "end":
    default:
      return argArray.slice(0, limit).join("") + ellipsis;
  }
};
