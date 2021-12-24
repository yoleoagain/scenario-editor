import { EditorState } from 'draft-js'
import { Subject } from 'rxjs'

//https://www.youtube.com/watch?v=_cjGaeCASqs&ab_channel=WebBlocksApp
//https://medium.com/disney-streaming/react-rxjs-pushing-state-down-4205af78f8b0
const editorSubject = new Subject<EditorState>()
const editorObservable = editorSubject.asObservable()
const initialEditorState = EditorState.createEmpty()

const changeEditorState = (newState: EditorState) => {
  editorSubject.next(newState)
}

changeEditorState(initialEditorState)

export { editorObservable, changeEditorState, initialEditorState }