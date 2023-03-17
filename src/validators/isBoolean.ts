export const isBoolean = (arg: any) =>
  Object.prototype.toString.call(arg) === "[object Boolean]";
