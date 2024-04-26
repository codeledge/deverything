export const startOfThisWeek = () => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay()
  );
};
