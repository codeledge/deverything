import { sleep } from "../helpers";
import { formatProgress } from "./formatProgress";

describe.skip("formatProgress", () => {
  it("visual test with big array", async () => {
    const bigArray = Array.from({ length: 1000 }, (_, i) => i);
    const progressId = "visual-test";

    console.log("\n=== Processing 1000 items ===\n");

    for (let i = 0; i < bigArray.length; i++) {
      // Simulate some work to make timing realistic
      await sleep(1);

      // Log progress at intervals
      if (
        i === 0 ||
        i === 10 ||
        i === 50 ||
        i === 100 ||
        i === 250 ||
        i === 500 ||
        i === 750 ||
        i === 900 ||
        i === 999
      ) {
        const progress = formatProgress(i, bigArray.length, { progressId });
        console.log(`Item ${i}: ${progress}`);
      }
    }

    console.log("\n=== Complete! ===\n");
  });

  it("visual test without progressId (no time estimation)", () => {
    const bigArray = Array.from({ length: 100 }, (_, i) => i);

    console.log("\n=== Without time estimation ===\n");

    for (let i = 0; i < bigArray.length; i++) {
      if (i % 25 === 0 || i === 99) {
        const progress = formatProgress(i, bigArray.length);
        console.log(`Item ${i}: ${progress}`);
      }
    }

    console.log("\n=== Complete! ===\n");
  });

  it("visual test with multiple concurrent progress trackers", async () => {
    const array1 = Array.from({ length: 100 }, (_, i) => i);
    const array2 = Array.from({ length: 50 }, (_, i) => i);

    console.log("\n=== Processing multiple arrays concurrently ===\n");

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
      await sleep(1);

      if (i < array1.length && i % 20 === 0) {
        const progress = formatProgress(i, array1.length, {
          progressId: "array1",
        });
        console.log(`Array 1, Item ${i}: ${progress}`);
      }

      if (i < array2.length && i % 10 === 0) {
        const progress = formatProgress(i, array2.length, {
          progressId: "array2",
        });
        console.log(`Array 2, Item ${i}: ${progress}`);
      }
    }

    console.log("\n=== Complete! ===\n");
  });
});
