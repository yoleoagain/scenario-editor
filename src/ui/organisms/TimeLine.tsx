import React from 'react'
import styled from 'styled-components'
import { Column } from '../atoms/Column'
import { editoreStore$ } from 'store/editor'
import { useObservableState } from 'observable-hooks'
import { createAutoTiming } from 'ui/utils/time-line'
import { getEditorText } from 'ui/utils/editor'
import { TimeLineItem } from '../molecules/TimeLineItem'

type Props = {}

const Wrap = styled(Column)`
  height: 100%;
  width: 80px;
  background: ${({ theme }) => theme.palette.main};
  min-height: calc(100vh - 40px);
`

export const TimeLine: React.FC<Props> = () => {
  const editorState = useObservableState(editoreStore$, editoreStore$.value)
  const timings = createAutoTiming(getEditorText(editorState))
  
  return (
    <Wrap>
      {timings.map((t, i) => <TimeLineItem key={`time-line-${i}`} item={t} />)}
    </Wrap>
  )
}