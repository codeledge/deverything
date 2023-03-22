import { isClient } from "./isClient";

export const isPWA = () => {
  return isClient() && window.matchMedia("(display-mode: standalone)").matches;
};
