import React from 'react'
import styled from 'styled-components'
import { Column } from '../atoms/Column'
import { editoreStore$ } from 'store/editor'
import { useObservableState } from 'observable-hooks'
import { createAutoTiming, Timing } from 'ui/utils/time-line'
import { getEditorText } from 'ui/utils/editor'

type Props = {}

const Wrap = styled(Column)`
  height: 100%;
  width: 80px;
  background: ${({ theme }) => theme.palette.main};
  min-height: calc(100vh - 40px);
`
const TimingItem = styled.div`
  color: #000;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.mainColor};
  background: ${({ theme }) => theme.palette.mainLighter};
  text-align: center;
`


export const TimeLine: React.FC<Props> = () => {
  const editorState = useObservableState(editoreStore$, editoreStore$.value)
  const timings = createAutoTiming(getEditorText(editorState))
  
  return (
    // TODO: Replace timing item in separate component
    <Wrap>
      {timings.map(t => {
        let style = {};

        if (t?.rowNode && 'getComputedStyle' in window){
          const { rowNode } = t
          const { paddingTop, paddingBottom, marginBottom, marginTop } = getComputedStyle(rowNode)

          style = {
            height: `calc(${paddingTop} + ${paddingBottom} + ${marginTop} + ${marginBottom} + ${rowNode.offsetHeight}px)`,
          }
          console.log(style.height)
        }

        return (
          <TimingItem style={style}>
            {t.isEmptyRow ? '' : t.timeLabel}
          </TimingItem>
        )
      })}
    </Wrap>
  )
}