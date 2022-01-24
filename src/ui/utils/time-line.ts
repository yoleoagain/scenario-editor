import { trimWord, fromSecondsToTimeLabel } from './string'

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
    const trimmedParagraph = trimWord(p)
    const lengthOfParagphInSeconds = Math.round(p.split(' ')
                                                 .reduce((acc, word) => trimWord(word).length === 0 
                                                  ? acc + 0
                                                  : acc + timePerWord, 0))
    const isEmptyRow = trimmedParagraph.length === 0
    const result = {
      timeLabel: fromSecondsToTimeLabel(lengthOfParagphInSeconds + timingInSec),
      text: p,
      rowNode: rows[i],
      isEmptyRow
    }

    timingInSec += isEmptyRow ? 0 : lengthOfParagphInSeconds

    return result
  })
}