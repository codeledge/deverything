/**
 * Get a client cookie by name, works only in the browser
 * @param name
 * @returns the cookie value, if exists
 */
export const getCookieByName = (name: string): string | undefined => {
  if (typeof document === "undefined") {
    return undefined;
  }

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return undefined;
};
