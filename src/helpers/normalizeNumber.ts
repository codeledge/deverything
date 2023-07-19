export const normalizeNumber = ({
  value,
  max,
  min,
}: {
  value: number;
  max: number;
  min: number;
}) => {
  if (value >= max) return 1;
  if (value <= min) return 0;

  return (value - min) / (max - min);
};
