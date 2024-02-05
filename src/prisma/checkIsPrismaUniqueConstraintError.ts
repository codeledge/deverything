/**
 * Useful for no-op queries where you want to make sure the error is a unique constraint error.
 * @example
 * try {
 *   await query();
 * } catch (e) {
 *   checkIsPrismaUniqueConstraintError(e);
 *   // carry on with other stuff, it is a unique constraint error
 * }
 * @link https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors
 * @link https://www.prisma.io/docs/reference/api-reference/error-reference#p2002
 */
export const checkIsPrismaUniqueConstraintError = (error: Error) => {
  if (!isPrismaUniqueConstraintError(error)) throw error;
};

export const isPrismaUniqueConstraintError = (
  error: Error & { code?: string }
) => error.code === "P2002";
