type EditorConfig = {
  lineHeight: number
}

export function createAutoTiming(text: string, editorConfig: EditorConfig = { lineHeight: 14 }){
  const paragraphs = text.split('\n')
  const timePerWord = 0.5
  let timingInSec = 0

  return paragraphs.map((p, i) => {
    const format = v => String(v).length === 1 ? '0' + v : v
    const lengthOfParagphInSeconds = Math.round(p.split(' ').reduce((acc, prev, i) => acc + timePerWord, 0))
    const result = {
      timeLabel: `${format(timingInSec)}:${format(timingInSec + lengthOfParagphInSeconds)}`,
      text: p
    }
    
    timingInSec += lengthOfParagphInSeconds

    return result
  })
}