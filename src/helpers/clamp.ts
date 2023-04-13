export const clamp = ({
  number,
  min,
  max,
}: {
  number: number;
  min: number;
  max: number;
}) => {
  if (max < min && process.env.DEVERYTHING_WARNINGS) {
    console.warn("clamp: max < min", { number, min, max });
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};
