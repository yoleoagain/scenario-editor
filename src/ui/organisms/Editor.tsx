import React from 'react'
import { Editor as DraftEditor, EditorState } from 'draft-js'
import { editorObservable } from '../../store/editor'
import { Column } from '../atoms'
import { EditorToolbar } from './EditorToolbar'
import styled from 'styled-components'

type Props = {}

export const Editor = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())

  React.useEffect(() => {
    const subscription = editorObservable.subscribe(newEditorState => { setEditorState(newEditorState) })

    return () => { subscription.unsubscribe() }
  }, [])

  return(
    <Column>
      <EditorToolbar />
      <DraftEditor 
        editorState={editorState}
        onChange={setEditorState}
      />
    </Column>
  )
}