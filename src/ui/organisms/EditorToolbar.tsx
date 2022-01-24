import React from 'react'
import styled from 'styled-components'
import { RichUtils } from 'draft-js'
import { RowStart } from '../atoms'
import { editoreStore$ } from '../../store/editor'
import { ButtonToogle } from '../atoms/ButtonToogle'

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
  background: ${({ theme }) => theme.palette.mainLighter};
  color: ${({ theme }) => theme.palette.mainColor};
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

  return (
    <RowStart>
      {BLOCK_TYPES.map((type) =>
        <ButtonToogle
          key={type.label}
          label={type.label}
          active={type.style === blockType}
          onClick={(e) => {
            e.preventDefault()
            const newState = RichUtils.toggleBlockType(editorState, type.style)
            editoreStore$.next(newState)
          }}
        />
      )}
    </RowStart>
  )
}