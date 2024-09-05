import { formatCookies } from "../formatters";

/**
 * Set a client cookie by name, works only in the browser
 * @param name - required
 * @param value - required, any value tha can be serialized
 * @param domain - optional, defailts to current domain
 * @param maxAgeSeconds - optional, defaults to "Session"
 */
export const setCookie = ({
  domain,
  maxAgeSeconds,
  name,
  value,
}: {
  domain?: string;
  maxAgeSeconds?: number;
  name: string;
  value: any;
}): void => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = formatCookies({
    [name]: value,
    domain,
    "max-age": maxAgeSeconds,
  });
};
