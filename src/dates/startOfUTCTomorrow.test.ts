import { describe, it, expect, jest } from "@jest/globals";
import { startOfUTCTomorrow } from "./startOfUTCTomorrow";

describe("startOfUTCTomorrow", () => {
  it("should return start of tomorrow in UTC", () => {
    // Mock current date to a known value
    const mockDate = new Date("2023-10-15T15:30:45.123Z");
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const result = startOfUTCTomorrow();

    // Should be start of next UTC day
    expect(result.toISOString()).toBe("2023-10-16T00:00:00.000Z");

    jest.useRealTimers();
  });

  it("should handle month boundaries", () => {
    const mockDate = new Date("2023-10-31T23:59:59.999Z");
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const result = startOfUTCTomorrow();

    expect(result.toISOString()).toBe("2023-11-01T00:00:00.000Z");

    jest.useRealTimers();
  });

  it("should handle year boundaries", () => {
    const mockDate = new Date("2023-12-31T12:00:00.000Z");
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const result = startOfUTCTomorrow();

    expect(result.toISOString()).toBe("2024-01-01T00:00:00.000Z");

    jest.useRealTimers();
  });

  it("should return consistent UTC time regardless of timezone", () => {
    // Mock current date in Pacific timezone (UTC-7/8)
    const mockDate = new Date("2023-06-15T05:00:00.000-07:00"); // 12:00 UTC
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const result = startOfUTCTomorrow();

    // Should still return start of next UTC day
    expect(result.toISOString()).toBe("2023-06-16T00:00:00.000Z");

    jest.useRealTimers();
  });
});
