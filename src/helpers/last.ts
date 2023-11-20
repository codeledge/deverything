import { lastIndex } from "./lastIndex";

// Assume the array is not empty, otherwise the result needs to be banged all the time
export const last = <T>(arr: T[]): T => arr[lastIndex(arr)];
