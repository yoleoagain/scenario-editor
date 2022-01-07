import React from 'react'
import styled from 'styled-components'
import { RichUtils } from 'draft-js'
import { RowStart } from '../atoms'
import { editoreStore$ } from '../../store/editor'
import { useObservableState } from 'observable-hooks'

// TODO: Made in store by settings
const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
]

const ControlButton = styled.button<{ active: boolean }>`
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.paddings.quarter};
`

export const EditorToolbar = () => {
  // Example to cut boilerplate
  // const editorState = useObservableState(editoreStore$, editoreStore$.value)

  const [editorState, setEditorState] = React.useState(editoreStore$.value)

  React.useEffect(() => {
    const sub = editoreStore$.subscribe(setEditorState)
    return () => sub.unsubscribe()
  }, [])

  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(editorState
      .getSelection()
      .getStartKey())
    .getType()

  console.log(editorState.getCurrentContent().getPlainText('\u0001'))
  return (
    <RowStart>
      {BLOCK_TYPES.map((type) =>
        <ControlButton
          key={type.label}
          active={type.style === blockType}
          onClick={(e) => {
            console.log('OOOP', type.style)
            e.preventDefault()
            const newState = RichUtils.toggleBlockType(editorState, type.style)//RichUtils.toggleInlineStyle(editorState, 'BOLD')

            editoreStore$.next(newState)
          }}
        >
          {type.label}
        </ControlButton>

      )}
    </RowStart>
  )
}