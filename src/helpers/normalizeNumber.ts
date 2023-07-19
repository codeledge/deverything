export const normalizeNumber = ({
  val,
  max,
  min,
}: {
  val: number;
  max: number;
  min: number;
}) => {
  return (val - min) / (max - min);
};
