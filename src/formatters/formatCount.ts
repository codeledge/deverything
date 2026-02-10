/**
 * @example formatCount({items: [1, 2, 3]}) => "#items: 3"
 * @example formatCount({items: [1, 2, 3], things: 5}) => "#items: 3, #things: 5"
 * @example formatCount({users: 10, posts: 20}) => "#users: 10, #posts: 20"
 */
export const formatCount = (
  counters: Record<string, any[] | number>
): string => {
  return Object.entries(counters)
    .map(([key, value]) => {
      const count = Array.isArray(value) ? value.length : value;
      return `#${key}: ${count}`;
    })
    .join(", ");
};
