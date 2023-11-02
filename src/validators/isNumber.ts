export const isInt = (arg: any) => Number.isInteger(arg);

export const isEven = (arg: any) => isInt(arg) && !(arg % 2);

export const isOdd = (arg: any) => isInt(arg) && !!(arg % 2);

/**
 * @deprecated use isPositiveInt instead
 */
export const isPositive = (arg: any) => isInt(arg) && arg > 0;

export const isPositiveInt = (arg: any) => isInt(arg) && arg > 0;

/**
 * @deprecated use isNegativeInt instead
 */
export const isNegative = (arg: any) => isInt(arg) && arg < 0;

export const isNegativeInt = (arg: any) => isInt(arg) && arg < 0;

export const isNumber = (arg: any): arg is number => {
  return (
    Object.prototype.toString.apply(arg) === "[object Number]" && isFinite(arg)
  );
};
