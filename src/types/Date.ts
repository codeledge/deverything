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
 * @example "2021-01"
 */
export type ISOMonth = string;
/**
 * @example "2021"
 */
export type ISOYear = string;
/**
 * @example "America/New_York"
 */
export type Timezone = string;

export type DateRange<T extends DateLike = DateLike> = {
  startDate: T;
  endDate: T;
};

export type DateSeries<T extends DateLike = DateLike> = T[];
