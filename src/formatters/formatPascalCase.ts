/**
 * @example formatPascalCase("hello-world") => "HelloWorld"
 * @example formatPascalCase("hello_world") => "HelloWorld"
 * @example formatPascalCase("hello world") => "HelloWorld"
 */
export const formatPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)/g, (_match, char) => char.toUpperCase())
    .replace(/^(.)/, (char) => char.toUpperCase());
};
