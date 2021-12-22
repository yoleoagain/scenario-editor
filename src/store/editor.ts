import { useState } from 'react';
import { EditorState } from 'draft-js'
import { Subject } from 'rxjs'
import React from 'react';
//https://www.youtube.com/watch?v=_cjGaeCASqs&ab_channel=WebBlocksApp
type SetEditorState = React.Dispatch<React.SetStateAction<EditorState>>
const subject = new Subject<EditorState>()
let state = EditorState.createEmpty()

export const ecitorStore = {
  // Write setEdotrState
  subscribe: (setEditorState: SetEditorState) => subject.subscribe((state) => setEditorState(state)),
  toogleSelection: (blockType: string) => {
    setEditorState(
        RichUtils.toggleBlockType(
          editorState,
          blockType
        )
    )
  }
}

//editorState: EditorState.createEmpty()
