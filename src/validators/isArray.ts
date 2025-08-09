/**
 * Checks if the provided argument is an array.
 *
 * @template T - The type of elements in the array.
 * @param arg - The value to check.
 * @returns True if the argument is an array, false otherwise.
 */
export const isArray = <T>(arg?: any): arg is T[] => Array.isArray(arg);
