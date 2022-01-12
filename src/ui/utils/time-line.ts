export type Timing = {
  timeLabel: string
  text: string
  isEmptyRow: boolean
  rowNode: HTMLElement
}

export function createAutoTiming(text: string): Timing[] {
  const paragraphs = text.split('\u0001')
  const timePerWord = 0.5
  let timingInSec = 0

  // TODO: REPLACE TIMINGS IN OBSERVABLE VARIABLE
  const rows = document.querySelectorAll('*[data-block="true"]')

  //@ts-ignore
  return paragraphs.map((p, i) => {
    const format = (v: string | number) => String(v).length === 1 ? '0' + v : v
    const lengthOfParagphInSeconds = Math.round(p.split(' ').reduce(acc => acc + timePerWord, 0))
    const isEmptyRow = p.replace(/ /g, '') === ''
    const result = {
      timeLabel: `${format(timingInSec)}:${format(timingInSec + lengthOfParagphInSeconds)}`,
      text: p,
      rowNode: rows[i],
      isEmptyRow
    }

    timingInSec += isEmptyRow ? 0 : lengthOfParagphInSeconds

    return result
  })
}