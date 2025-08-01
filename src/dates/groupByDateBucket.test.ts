import { describe, it, expect } from "vitest";
import { groupByDateBucket } from "./groupByDateBucket";
import { ISODate } from "../types";

describe("groupByDateBucket", () => {
  const dateSeries: ISODate[] = [
    "2023-01-01T00:00:00.000Z",
    "2023-01-02T00:00:00.000Z",
    "2023-01-03T00:00:00.000Z",
  ];

  describe("with date arrays (original functionality)", () => {
    it("should bucket dates correctly", () => {
      const dates: ISODate[] = [
        "2023-01-01T12:00:00.000Z",
        "2023-01-02T06:00:00.000Z",
        "2023-01-02T18:00:00.000Z",
        "2023-01-03T10:00:00.000Z",
      ];

      const result = groupByDateBucket({
        dateBuckets: dateSeries,
        items: dates,
        unit: "day",
      });

      expect(result).toEqual({
        "2023-01-01T00:00:00.000Z": ["2023-01-01T12:00:00.000Z"],
        "2023-01-02T00:00:00.000Z": [
          "2023-01-02T06:00:00.000Z",
          "2023-01-02T18:00:00.000Z",
        ],
        "2023-01-03T00:00:00.000Z": ["2023-01-03T10:00:00.000Z"],
      });
    });
  });

  describe("with object arrays and accessor", () => {
    type Event = {
      id: string;
      timestamp: ISODate;
      name: string;
    };

    it("should bucket objects by date property using string accessor", () => {
      const events: Event[] = [
        { id: "1", timestamp: "2023-01-01T12:00:00.000Z", name: "Event 1" },
        { id: "2", timestamp: "2023-01-02T06:00:00.000Z", name: "Event 2" },
        { id: "3", timestamp: "2023-01-02T18:00:00.000Z", name: "Event 3" },
        { id: "4", timestamp: "2023-01-03T10:00:00.000Z", name: "Event 4" },
      ];

      const result = groupByDateBucket({
        dateBuckets: dateSeries,
        items: events,
        unit: "day",
        accessor: "timestamp",
      });

      expect(result).toEqual({
        "2023-01-01T00:00:00.000Z": [
          { id: "1", timestamp: "2023-01-01T12:00:00.000Z", name: "Event 1" },
        ],
        "2023-01-02T00:00:00.000Z": [
          { id: "2", timestamp: "2023-01-02T06:00:00.000Z", name: "Event 2" },
          { id: "3", timestamp: "2023-01-02T18:00:00.000Z", name: "Event 3" },
        ],
        "2023-01-03T00:00:00.000Z": [
          { id: "4", timestamp: "2023-01-03T10:00:00.000Z", name: "Event 4" },
        ],
      });
    });

    it("should bucket objects by date property using function accessor", () => {
      const events: Event[] = [
        { id: "1", timestamp: "2023-01-01T12:00:00.000Z", name: "Event 1" },
        { id: "2", timestamp: "2023-01-02T06:00:00.000Z", name: "Event 2" },
      ];

      const result = groupByDateBucket({
        dateBuckets: dateSeries,
        items: events,
        unit: "day",
        accessor: (event: Event) => event.timestamp,
      });

      expect(result).toEqual({
        "2023-01-01T00:00:00.000Z": [
          { id: "1", timestamp: "2023-01-01T12:00:00.000Z", name: "Event 1" },
        ],
        "2023-01-02T00:00:00.000Z": [
          { id: "2", timestamp: "2023-01-02T06:00:00.000Z", name: "Event 2" },
        ],
        "2023-01-03T00:00:00.000Z": [],
      });
    });

    it("should handle nested date properties", () => {
      type ComplexEvent = {
        id: string;
        meta: {
          createdAt: ISODate;
        };
        name: string;
      };

      const events: ComplexEvent[] = [
        {
          id: "1",
          meta: { createdAt: "2023-01-01T12:00:00.000Z" },
          name: "Event 1",
        },
        {
          id: "2",
          meta: { createdAt: "2023-01-02T06:00:00.000Z" },
          name: "Event 2",
        },
      ];

      const result = groupByDateBucket({
        dateBuckets: dateSeries,
        items: events,
        unit: "day",
        accessor: (event: ComplexEvent) => event.meta.createdAt,
      });

      expect(result).toEqual({
        "2023-01-01T00:00:00.000Z": [
          {
            id: "1",
            meta: { createdAt: "2023-01-01T12:00:00.000Z" },
            name: "Event 1",
          },
        ],
        "2023-01-02T00:00:00.000Z": [
          {
            id: "2",
            meta: { createdAt: "2023-01-02T06:00:00.000Z" },
            name: "Event 2",
          },
        ],
        "2023-01-03T00:00:00.000Z": [],
      });
    });
  });
});
