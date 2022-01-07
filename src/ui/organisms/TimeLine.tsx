import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Column } from '../atoms/Column'
import { editoreStore$ } from 'store/editor'
import { useObservableState } from 'observable-hooks'
import { createAutoTiming, getEditorText, Timing } from 'ui/utils/editor'

type Props = {}

const Wrap = styled(Column)`
  height: 100%;
  width: 80px;
  background: ${({ theme }) => theme.palette.main};
  min-height: calc(100vh - 40px);
`
const TimingItem = styled.div`
  padding: 2px;
  color: #000;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.mainColor};
  background: ${({ theme }) => theme.palette.mainLighter};
  text-align: center;
  border-radius: 8px;
`


export const TimeLine: React.FC<Props> = () => {
  const editorState = useObservableState(editoreStore$, editoreStore$.value)
  const timings = createAutoTiming(getEditorText(editorState))
  // const timings = useMemo<Timing[]>(() => createAutoTiming(getEditorText(editorState)), [editorState])
  console.log('timings', timings)
  return (

    <Wrap>
      {timings.map(t =>
        <TimingItem>
          {t.timeLabel}
        </TimingItem>
      )}
    </Wrap>
  )
}