/**
 * The domain of an email address: everything after the last `@`, trimmed and
 * lowercased (domains are case-insensitive). The last `@` is the separator
 * because a quoted local part may itself contain `@`, while a domain cannot.
 *
 * @example extractEmailDomain("User@Example.COM") // "example.com"
 * @example extractEmailDomain('"a@b"@example.com') // "example.com"
 * @example extractEmailDomain("not-an-email") // undefined
 */
export const extractEmailDomain = (email: string): string | undefined => {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) return undefined;
  const domain = email
    .slice(atIndex + 1)
    .trim()
    .toLowerCase();
  return domain === "" ? undefined : domain;
};
