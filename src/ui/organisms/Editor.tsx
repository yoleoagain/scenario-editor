import React, { useEffect } from 'react'
import { Editor as DraftEditor } from 'draft-js'
import { editoreStore$ } from 'store/editor'
import { EditorToolbar } from './EditorToolbar'
import { TimeLine } from './TimeLine'
import { RowStart } from 'ui/atoms/RowStart'
import styled from 'styled-components'

const StyledRowStart = styled(RowStart)`
  & .DraftEditor-root{
    width: 100%;
    background: ${({ theme }) => theme.palette.mainLighter};
    color: ${({ theme }) => theme.palette.mainColor};
  }
`

export const Editor = () => {
  const [editorState, setEditorState] = React.useState(editoreStore$.value)

  useEffect(() => {
    const sub = editoreStore$.subscribe(setEditorState)
    return () => sub.unsubscribe()
  }, [])

  return (
    <div>
      <EditorToolbar />
      <StyledRowStart>
        <TimeLine />
        <DraftEditor
          editorState={editorState}
          onChange={(newEditorState) => { editoreStore$.next(newEditorState) }}
        />
      </StyledRowStart>
    </div>
  )
}