import * as A from '../actions'

const initialState = {
  
}

export default function touchpointsApp(state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    /*case A.GET_HANDLE:
      return {
        ...state,
        handles: {
          ...state.handles,
          [meta.data]: payload
        },
        handle: meta.isMe ? payload : state.handle
      }*/
    default:
      return state
  }
}
