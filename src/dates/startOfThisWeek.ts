export const startOfThisWeek = (): Date => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay()
  );
};
