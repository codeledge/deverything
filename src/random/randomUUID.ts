import { incrementalId } from "../helpers";

/**
 * This is a light-weight version of the `generateUuid` function
 * To be used only for test purposed and NOT for production
 * Leave 0s, so it gets immediately recognized as a fake uuid
 *
 * /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
 */
export const randomUUID = () => {
  const id = incrementalId().toString().padStart(15, "0");
  const digit12 = id.substring(0, 12);
  const digit3 = id.substring(12, 15);
  return `00000000-0000-1000-8${digit3}-${digit12}`;
};
