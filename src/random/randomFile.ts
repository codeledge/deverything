import { randomArrayItem } from "./randomArrayItem";
import { randomParagraph } from "./randomParagraph";
import { randomWord } from "./randomWord";

const fileExtensions = ["png", "jpg", "jpeg", "gif", "svg", "webp"];

// This is a client only function
export const randomFile = ({
  name,
  extension,
}: {
  name?: string;
  extension?: string;
} = {}): File | undefined => {
  if (typeof File === "undefined") return undefined;

  const _extension = extension || randomArrayItem(fileExtensions);
  return new File(
    [randomParagraph()], // TODO: Use random char string
    `${name || randomWord()}.${_extension}`,
    {
      type: `image/${_extension}`,
    }
  );
};
