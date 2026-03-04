import { chunkArray } from "./chunkArray";

type ChunkTextOptions = {
  preserveOnBreak?: "sentence" | "word";
};

export const chunkText = (
  text: string,
  chunkMaxSize: number,
  options?: ChunkTextOptions
): string[] => {
  const segmenter = new Intl.Segmenter(undefined, {
    granularity: options?.preserveOnBreak,
  });
  const segments = [...segmenter.segment(text)].map((s) => s.segment);

  const chunks: string[] = [];
  let current = "";

  for (const segment of segments) {
    if (segment.length > chunkMaxSize) {
      if (current) {
        chunks.push(current);
        current = "";
      }
      chunks.push(
        ...chunkArray([...segment], chunkMaxSize).map((chars) => chars.join(""))
      );
    } else if (current.length + segment.length > chunkMaxSize) {
      chunks.push(current);
      current = segment;
    } else {
      current += segment;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
};
