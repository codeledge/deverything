export const extractEmailDomain = (email: string): string | undefined => {
  const atIndex = email.indexOf("@");
  if (atIndex === -1 || atIndex === email.length - 1) return undefined;
  return email.slice(atIndex + 1);
};
