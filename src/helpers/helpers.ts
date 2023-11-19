export const secondsToHoursMinutes = (secondsStr: string) => {
  const seconds = +secondsStr;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursStr = hours > 0 ? `${hours}h ` : '';
  const minutesStr = minutes > 0 ? `${minutes}m` : '';

  return `${hoursStr}${minutesStr}`.trim();
};

export const FAVORITE_MOVIE_ID = 'favorite_moview_id';

export function hasMessageProperty(
  error: any,
): asserts error is { message: string } {
  if (typeof error !== 'object' || error === null) {
    throw new Error('error must be Object');
  }

  if (!('message' in error)) {
    throw new Error('error object must contain "message" property');
  }

  if (typeof error.message !== 'string') {
    throw new Error('message must be string');
  }
}
