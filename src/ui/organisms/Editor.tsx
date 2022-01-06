<<<<<<< HEAD
﻿import React, { useEffect } from 'react'
import { Editor as DraftEditor } from 'draft-js'
import { editoreStore$ } from '../../store/editor'

export const DEditor = () => {
  const [editorState, setEditorState] = React.useState(editoreStore$.value)

  useEffect(() => {
    const sub = editoreStore$.subscribe(setEditorState)
    return () => sub.unsubscribe()
  }, [])
=======
﻿import React from 'react'
import { Editor as DraftEditor, EditorState } from 'draft-js'
import { editorObservable } from '../../store/editor'
import { Column } from '../atoms'
import { EditorToolbar } from './EditorToolbar'
import styled from 'styled-components'

type Props = {}

export const Editor = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
>>>>>>> 2df38128698fe451e51a947ee7d3ca25d09b9d8f

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