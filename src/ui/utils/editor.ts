import { EditorState } from 'draft-js'

export const getEditorText = (editorState: EditorState) => editorState.getCurrentContent().getPlainText('\u0001')


