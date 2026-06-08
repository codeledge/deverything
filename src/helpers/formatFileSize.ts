type FileSizeUnit = "B" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB";

const BYTES_PER_UNIT: Record<FileSizeUnit, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
  PB: 1024 ** 5,
  EB: 1024 ** 6,
};

/**
 * Formats a byte count into the requested unit, suffixed with the unit label
 * (e.g. `formatFileSize(2048)` => `"2 KB"`, `formatFileSize(5_242_880, "MB")` => `"5 MB"`).
 *
 * Rounds to the nearest whole unit and never returns less than 1, so small files
 * don't display as "0 KB".
 *
 * @param bytes - Size in bytes
 * @param unit - Unit to format to (defaults to "KB")
 */
export const formatFileSize = (
  bytes: number,
  unit: FileSizeUnit = "KB"
): string => `${Math.max(1, Math.round(bytes / BYTES_PER_UNIT[unit]))}${unit}`;
