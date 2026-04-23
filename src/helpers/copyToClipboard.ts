/**
 * Copy a string to the system clipboard, works only in the browser
 * @param value - the string to copy
 * @returns a promise that resolves once the write is complete, or rejects if the Clipboard API is unavailable or the write fails
 */
export const copyToClipboard = async (value: string): Promise<void> => {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    throw new Error("Clipboard API is not available in this environment");
  }

  await navigator.clipboard.writeText(value);
};
