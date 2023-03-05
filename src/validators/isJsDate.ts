export const isJsDate = (arg: any) =>
  Object.prototype.toString.call(arg) === "[object Date]" && !isNaN(arg);
