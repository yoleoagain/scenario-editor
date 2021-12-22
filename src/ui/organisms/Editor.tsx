import React from 'react'
import { Editor as DraftEditor, EditorState } from 'draft-js'
import styled from 'styled-components'

type Props = {}

export const DEditor = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())

  return(
    <DraftEditor 
      editorState={editorState}
      onChange={setEditorState}
    />
  )
}