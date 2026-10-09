import { incrementalId } from "../helpers";

/**
 * A predictable, UUID-shaped id for tests and fixtures. It is NOT random: it is
 * built from a counter that starts at 1 in every process, so ids repeat across
 * processes and restarts and are trivially guessable. Never use it for ids in
 * production; use `crypto.randomUUID()` there.
 * Leave 0s, so it gets immediately recognized as a fake uuid
 *
 * /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
 */
export const generateTestUUID = () => {
  const id = incrementalId().toString().padStart(15, "0");
  const digit12 = id.substring(0, 12);
  const digit3 = id.substring(12, 15);
  return `00000000-0000-1000-8${digit3}-${digit12}`;
};

/**
 * @deprecated Renamed to {@link generateTestUUID}: despite the name it is not
 * random. Use `crypto.randomUUID()` for ids in production.
 */
export const randomUUID = generateTestUUID;
