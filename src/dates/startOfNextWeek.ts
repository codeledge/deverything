export const startOfNextWeek = (): Date => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 7 - now.getDay()
  );
};
