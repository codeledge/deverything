export const paginationToSkipTake = (pagination: {
  page: number;
  perPage: number;
}): { skip: number; take: number } => {
  const { page, perPage } = pagination;
  const skip = (page - 1) * perPage;
  const take = perPage;
  return { skip, take };
};
