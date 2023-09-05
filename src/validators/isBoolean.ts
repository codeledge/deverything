export const isBoolean = (arg: any): arg is boolean =>
  Object.prototype.toString.call(arg) === "[object Boolean]";
