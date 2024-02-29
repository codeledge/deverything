import { Datey } from "./Date";

export type WithDatey<T> = T extends Date
  ? Datey
  : T extends Array<infer R>
  ? Array<WithDatey<R>>
  : T extends object
  ? { [K in keyof T]: WithDatey<T[K]> }
  : T;

// TEST
// type WithDates = {
//   a: Date;
//   b: {
//     c: Date;
//     c1: Date | null;
//     c12: Date | undefined;
//     c123: Date | undefined | null;
//   };
//   d: Date[];
// };

// type DateyDates = WithDatey<WithDates>;
