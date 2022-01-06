import React, { useEffect } from 'react'
import { Editor as DraftEditor } from 'draft-js'
import { editoreStore$ } from '../../store/editor'

export const DEditor = () => {
  const [editorState, setEditorState] = React.useState(editoreStore$.value)

  useEffect(() => {
    const sub = editoreStore$.subscribe(setEditorState)
    return () => sub.unsubscribe()
  }, [])

  return(
    <DraftEditor 
      editorState={editorState}
      onChange={setEditorState}
    />
  )
}