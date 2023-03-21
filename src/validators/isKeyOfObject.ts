export const isKeyOfObject = <T extends object>(
  key: string | number | symbol,
  obj: T
): key is keyof T => key in obj;
