export const skipTakeToPagination = (skipTake: {
  skip: number;
  take: number;
}): { page: number; perPage: number } => {
  const { skip, take } = skipTake;
  const perPage = take;
  const page = Math.floor(skip / take) + 1;
  return { page, perPage };
};
