/**
 * Escapes special LIKE pattern metacharacters (`\`, `%`, `_`) so that a
 * user-supplied string is treated as a literal substring rather than a
 * pattern.  Use together with an explicit `ESCAPE '\\'` clause in the query.
 *
 * @example
 * const pattern = `%${escapeSqlLikePattern(userInput)}%`;
 * db.query(`SELECT … WHERE col LIKE ? ESCAPE '\\'`, [pattern]);
 */
export const escapeSqlLikePattern = (value: string): string =>
  value.replace(/[\\%_]/g, "\\$&");
