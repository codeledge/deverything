export const isFile = (arg?: any): arg is File =>
  Object.prototype.toString.call(arg) === "[object File]";
