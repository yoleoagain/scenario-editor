import { EditorState } from 'draft-js'
import { BehaviorSubject } from 'rxjs'

export const editoreStore$ = new BehaviorSubject<EditorState>(EditorState.createEmpty())