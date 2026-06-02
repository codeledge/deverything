/**
 * @example formatCount({items: [1, 2, 3]}) => "3 items"
 * @example formatCount({items: [1, 2, 3], things: 5}) => "3 items, 5 things"
 * @example formatCount({users: 10, posts: 20}) => "10 users, 20 posts"
 */
export const formatCount = (
  counters: Record<string, any[] | number>
): string => {
  return Object.entries(counters)
    .map(([key, value]) => {
      const count = Array.isArray(value) ? value.length : value;
      return `${count} ${key}`;
    })
    .join(", ");
};
