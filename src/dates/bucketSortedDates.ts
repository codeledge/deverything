import { parseDate } from "../helpers/parseDate";
import { ISODate } from "../types";

/**
 * Buckets dates into groups based on a date series
 * @param dateSeries Array of dates that define the buckets, must be sorted in ascending order
 * @param dates Array of dates to be bucketed, must be sorted in ascending order
 * @param unit The time unit to use for bucketing ('day', 'hour', 'minute', 'second')
 * @returns Record mapping each bucket date to an array of dates that fall within that bucket
 */
export const bucketSortedDates = (
  dateSeries: ISODate[],
  dates: ISODate[],
  unit: "day" | "hour" | "minute" | "second"
): Record<ISODate, ISODate[]> => {
  // Calculate interval based on unit for virtual right edge
  const getIntervalMs = (
    unit: "day" | "hour" | "minute" | "second"
  ): number => {
    switch (unit) {
      case "day":
        return 24 * 60 * 60 * 1000;
      case "hour":
        return 60 * 60 * 1000;
      case "minute":
        return 60 * 1000;
      case "second":
        return 1000;
    }
  };

  const intervalMs = getIntervalMs(unit);

  // Pre-compute timestamps and normalized keys for dateSeries
  const bucketData = dateSeries.map((date) => {
    const dateObj = new Date(date);
    return {
      timestamp: dateObj.getTime(),
      normalizedKey: dateObj.toISOString(),
    };
  });

  const bucketedDates: Record<ISODate, ISODate[]> = {};
  // Initialize each bucket with an empty array
  bucketData.forEach(({ normalizedKey }) => {
    bucketedDates[normalizedKey] = [];
  });

  // Single-pass algorithm assuming both arrays are sorted
  let bucketIndex = 0;

  dates.forEach((date) => {
    const dateObj = parseDate(date);
    if (!dateObj) return;

    const dateTimestamp = dateObj.getTime();
    const normalizedDate = dateObj.toISOString();

    // Find the appropriate bucket for this date
    // Since both arrays are sorted, we can advance the bucket index as needed
    while (bucketIndex < bucketData.length) {
      const currentBucketTimestamp = bucketData[bucketIndex].timestamp;
      const nextBucketTimestamp =
        bucketIndex < bucketData.length - 1
          ? bucketData[bucketIndex + 1].timestamp
          : currentBucketTimestamp + intervalMs;

      // If date falls within current bucket's range, add it and break
      if (
        dateTimestamp >= currentBucketTimestamp &&
        dateTimestamp < nextBucketTimestamp
      ) {
        bucketedDates[bucketData[bucketIndex].normalizedKey].push(
          normalizedDate
        );
        break;
      }

      // If date is before current bucket, it means dates array is not properly sorted
      // or there's a gap. Skip to next bucket.
      if (dateTimestamp < currentBucketTimestamp) {
        break;
      }

      // Date is after current bucket, move to next bucket
      bucketIndex++;
    }
  });

  return bucketedDates;
};
