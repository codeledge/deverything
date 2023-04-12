export const clamp = (
  number: number,
  { min, max }: { min: number; max: number }
) => {
  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};
