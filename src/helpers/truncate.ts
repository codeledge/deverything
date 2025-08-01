import { isPositiveInt } from "../validators/isNumber";

export const truncate = (
  arg: string,
  limit: number,
  {
    ellipsis,
    position,
  }: { ellipsis?: string; position?: "start" | "middle" | "end" } = {}
) => {
  if (!ellipsis) ellipsis = "...";
  if (!position) position = "end";

  if (!isPositiveInt(limit)) return arg;

  const argArray = [...arg]; // convert string to array, emoji and unicode safe

  const ellipsisLength = ellipsis.length;

  if (argArray.length <= limit) return arg;

  switch (position) {
    case "start": {
      const startSliceLength = limit - ellipsisLength;
      return ellipsis + argArray.slice(-startSliceLength).join("");
    }
    case "middle": {
      const startSliceLength = Math.ceil((limit - ellipsisLength) / 2);
      const endSliceStart =
        argArray.length - Math.floor((limit - ellipsisLength) / 2);
      return (
        argArray.slice(0, startSliceLength).join("") +
        ellipsis +
        argArray.slice(endSliceStart).join("")
      );
    }
    case "end":
    default:
      return argArray.slice(0, limit - ellipsisLength).join("") + ellipsis;
  }
};
