import { formatPascalCase } from "./formatPascalCase";

/**
 * @example formatCamelCase("hello-world") => "helloWorld"
 * @example formatCamelCase("hello_world") => "helloWorld"
 * @example formatCamelCase("Hello World") => "helloWorld"
 */
export const formatCamelCase = (str: string) => {
  const newString = formatPascalCase(str);
  return newString.charAt(0).toLowerCase() + newString.slice(1);
};
