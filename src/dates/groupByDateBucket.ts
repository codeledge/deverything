import { parseDate } from "../helpers/parseDate";
import { ISODate } from "../types";
import { PropertyAccessor } from "../_internals/getProp";
import { getProp } from "../_internals/getProp";

/**
 * Groups items into date buckets based on their dates and specified time intervals
 * @param dateBuckets Array of ISO date strings that define the bucket boundaries, must be sorted in ascending order
 * @param items Array of items to be grouped into buckets, should be sorted in ascending order by the date property for optimal performance
 * @param unit The time unit to use for bucket intervals ('day', 'hour', 'minute', 'second')
 * @param accessor Optional property accessor for extracting dates from items. If not provided, assumes items are ISO date strings
 * @returns Record where keys are ISO date strings from dateBuckets and values are arrays of items that fall within each bucket's time range
 */

export function groupByDateBucket<T>({
  dateBuckets,
  items,
  unit,
  accessor,
}: {
  dateBuckets: ISODate[];
  items: T[];
  unit: "day" | "hour" | "minute" | "second";
  accessor?: PropertyAccessor<T>;
}): Record<ISODate, T[]> {
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

  // Pre-compute timestamps and normalized keys for dateBuckets
  const bucketData = dateBuckets.map((date) => {
    const dateObj = parseDate(date);
    if (!dateObj)
      throw new Error(`[groupByDateBucket] Invalid dateBucket: ${date}`);
    return {
      timestamp: dateObj.getTime(),
      normalizedKey: dateObj.toISOString(),
    };
  });

  const bucketedDates: Record<ISODate, T[]> = {};
  // Initialize each bucket with an empty array
  bucketData.forEach(({ normalizedKey }) => {
    bucketedDates[normalizedKey] = [];
  });

  // Helper function to extract date from item
  const extractDate = (item: T): ISODate | null => {
    if (accessor) {
      return getProp(item as any, accessor as any);
    }
    // If no accessor, assume T is ISODate
    return item as unknown as ISODate;
  };

  // Single-pass algorithm assuming both arrays are sorted
  let bucketIndex = 0;

  items.forEach((item) => {
    const dateValue = extractDate(item);
    if (!dateValue) return;

    const dateObj = parseDate(dateValue);
    if (!dateObj) return;

    const dateTimestamp = dateObj.getTime();

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
        bucketedDates[bucketData[bucketIndex].normalizedKey].push(item);
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
}
