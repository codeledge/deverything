import { HTML_COLOR_NAME_SAMPLES } from "../constants/words";
import { randomArrayItem } from "./randomArrayItem";

export const randomHtmlColorName = () => {
  return randomArrayItem(HTML_COLOR_NAME_SAMPLES);
};
