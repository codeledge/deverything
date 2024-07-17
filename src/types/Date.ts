export type DateLike = Date | string | number;
export type Datey = Date | string;

/**
 * @example "2021-01-01T00:00:00.000Z"
 */
export type ISODate = string;
/**
 * @example "2021-01-01"
 */
export type ISODay = string;
/**
 * @example "America/New_York"
 */
export type Timezone = string;

export type DateRange = {
  startDate: DateLike;
  endDate: DateLike;
};
