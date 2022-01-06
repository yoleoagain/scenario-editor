import React, { useEffect } from 'react'
import { Editor as DraftEditor } from 'draft-js'
import { editoreStore$ } from '../../store/editor'
import { EditorToolbar } from './EditorToolbar'

export const Editor = () => {
  const [editorState, setEditorState] = React.useState(editoreStore$.value)

  useEffect(() => {
    const sub = editoreStore$.subscribe(setEditorState)
    return () => sub.unsubscribe()
  }, [])

  return(
    <div>
      <EditorToolbar />
      <DraftEditor 
        editorState={editorState}
        onChange={(newEditorState) => { editoreStore$.next(newEditorState) }}
      />
    </div>
  )
}