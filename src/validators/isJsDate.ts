export const isJsDate = (arg: Date): arg is Date =>
  Object.prototype.toString.call(arg) === "[object Date]" &&
  !isNaN(arg as unknown as number);
