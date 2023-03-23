export const isRegExp = (arg: any): arg is RegExp =>
  Object.prototype.toString.call(arg) === "[object RegExp]";
