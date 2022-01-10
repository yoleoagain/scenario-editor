import { EditorState } from 'draft-js'

type EditorConfig = {
  lineHeight: number
}

export const getEditorText = (editorState: EditorState) => editorState.getCurrentContent().getPlainText('\u0001')

export type Timing = {
  timeLabel: string
  text: string
  isEmptyRow: boolean
}
// export function createAutoTiming(text: string, editorConfig: EditorConfig = { lineHeight: 14 }){
export function createAutoTiming(text: string): Timing[] {
  const paragraphs = text.split('\u0001')
  const timePerWord = 0.5
  let timingInSec = 0

  return paragraphs.map((p, i) => {
    const format = (v: string | number) => String(v).length === 1 ? '0' + v : v
    const lengthOfParagphInSeconds = Math.round(p.split(' ').reduce((acc, prev, i) => acc + timePerWord, 0))
    const isEmptyRow = p.replace(/ /g, '') === ''
    const result = {
      timeLabel: `${format(timingInSec)}:${format(timingInSec + lengthOfParagphInSeconds)}`,
      text: p,
      isEmptyRow
    }

    timingInSec += isEmptyRow ? 0 : lengthOfParagphInSeconds

    return result
  })
}