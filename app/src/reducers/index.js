import * as A from '../actions'

const initialState = {
  reflections: {}
}

export default function touchpointsApp(state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.CREATE_REFLECTION:
      // payload is the hash of the new reflection
      // meta.data is the object with the 'notice' and 'description'
      return {
        ...state,
        reflections: {
          ...state.handles,
          [payload]: meta.data
        }
      }
    default:
      return state
  }
}
