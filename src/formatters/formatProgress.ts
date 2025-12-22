import { formatIndexProgress } from "./formatIndexProgress";
import { formatPercentage } from "./formatPercentage";

// Store progress tracking data
const progressTracking = new Map<
  string,
  {
    startTime: number;
    startIndex: number;
    lastTime: number;
    lastIndex: number;
  }
>();

const formatRemainingTime = (seconds: number): string => {
  if (seconds < 60) {
    return `~${Math.ceil(seconds)}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.ceil(seconds % 60);

  if (minutes < 60) {
    return remainingSeconds > 0
      ? `~${minutes}m ${remainingSeconds}s`
      : `~${minutes}m`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return remainingMinutes > 0
    ? `~${hours}h ${remainingMinutes}m`
    : `~${hours}h`;
};

const calculateRemainingTime = (
  progressId: string,
  currentIndex: number,
  total: number
): string | null => {
  const now = Date.now();
  const tracked = progressTracking.get(progressId);

  if (!tracked) {
    // First time tracking this progress
    progressTracking.set(progressId, {
      startTime: now,
      startIndex: currentIndex,
      lastTime: now,
      lastIndex: currentIndex,
    });
    return null;
  }

  // Update tracking data
  tracked.lastTime = now;
  tracked.lastIndex = currentIndex;

  // Calculate items processed and time elapsed
  const itemsProcessed = currentIndex - tracked.startIndex;
  const timeElapsed = (now - tracked.startTime) / 1000; // Convert to seconds

  // Need at least some progress and time to calculate
  if (itemsProcessed <= 0 || timeElapsed < 0.1) {
    return null;
  }

  // Calculate rate and remaining time
  const itemsPerSecond = itemsProcessed / timeElapsed;
  const itemsRemaining = total - (currentIndex + 1); // +1 because index is 0-based

  if (itemsRemaining <= 0) {
    // Clean up tracking when done
    progressTracking.delete(progressId);
    return null;
  }

  const remainingSeconds = itemsRemaining / itemsPerSecond;
  return formatRemainingTime(remainingSeconds);
};

export const formatProgress = (
  index: number,
  total: number,
  {
    progressId,
  }: {
    progressId?: string;
  } = {}
): string => {
  const baseProgress = `${formatIndexProgress(index, total)} ${formatPercentage(index / total)}`;

  if (!progressId) {
    return baseProgress;
  }

  const remainingTime = calculateRemainingTime(progressId, index, total);

  return remainingTime
    ? `${baseProgress} (${remainingTime} remaining)`
    : baseProgress;
};
