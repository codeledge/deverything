import { startOfDay } from "./startOfDay";

export const startOfToday = (): Date => {
  const now = new Date();
  return startOfDay(now);
};
