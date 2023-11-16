import { emojiRegex } from "../regex/emojiRegex";
export const isStringOfEmojis = (string: string) => {
  // Check if the string is empty or contains only whitespace
  if (!string.trim()) {
    return false;
  }

  // Split the string and check if every character or emoji group is an emoji
  return string.split(emojiRegex).every((part: string) => part.trim() === "");
};
