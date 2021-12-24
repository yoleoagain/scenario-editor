import React from 'react'
import styled from 'styled-components'
import { EditorState, RichUtils } from 'draft-js'
import { RowStart } from '../atoms'
import { changeEditorState, editorObservable, initialEditorState } from '../../store/editor'

// TODO: Made in store by settings
const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
]

const ControlButton = styled.button<{ active: boolean }>`
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.paddings.quarter};
`

export const EditorToolbar = () => {
  const [editorState, setEditorState] = React.useState<EditorState>(initialEditorState)
  const selection = editorState.getSelection()
  const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()
  
  React.useEffect(() => {
    const subject = editorObservable.subscribe(newEditorState => { setEditorState(newEditorState) })

    return () => { subject.unsubscribe() }
  }, [])

  return (
    <RowStart>
      {BLOCK_TYPES.map((type) =>
        <ControlButton
          key={type.label}
          active={type.style === blockType}
          onClick={() => {
            changeEditorState( RichUtils.toggleBlockType(editorState, blockType) )
          }}
        >
          {type.label}
        </ControlButton>
      )}
    </RowStart>
  )
}