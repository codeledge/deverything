type ChunkTextOptions = {
  preserveOnBreak?: "sentence" | "word";
};

const graphemeSegmenter = new Intl.Segmenter(undefined, {
  granularity: "grapheme",
});

/** Split a string into pieces that never exceed `maxSize` by UTF-16 length. */
const splitByMaxSize = (text: string, maxSize: number): string[] => {
  const graphemes = [...graphemeSegmenter.segment(text)].map((s) => s.segment);
  const chunks: string[] = [];
  let current = "";

  for (const grapheme of graphemes) {
    if (grapheme.length > maxSize) {
      if (current) {
        chunks.push(current);
        current = "";
      }
      // A single grapheme can still exceed maxSize (e.g. ZWJ sequences); slice by
      // UTF-16 length so the size contract is preserved.
      for (let i = 0; i < grapheme.length; i += maxSize) {
        chunks.push(grapheme.slice(i, i + maxSize));
      }
    } else if (current.length + grapheme.length > maxSize) {
      chunks.push(current);
      current = grapheme;
    } else {
      current += grapheme;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
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
      chunks.push(...splitByMaxSize(segment, chunkMaxSize));
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
