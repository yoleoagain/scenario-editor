export const trimWord = (w: string) => w.replace(/ /g, '')

/**
 * Format part of time string from to double value 1:2 to 11:22
 * @param v 
 * @returns {String}
 */
export const formatTimePart = (v: number | string) => String(v).length === 1 ? '0' + v : v

export const fromSecondsToTimeLabel = (sec: number, format: 'mm:ss' | 'hh:mm:ss' = 'mm:ss') => {
  const hours = Math.floor(sec / 3600),
    minutes = Math.floor(sec / 60) % 60,
    seconds = sec % 60;

  return format === 'hh:mm:ss' 
    ? `${formatTimePart(hours)}:${formatTimePart(minutes)}:${formatTimePart(seconds)}`
    : `${formatTimePart(minutes)}:${formatTimePart(seconds)}`
}