export const CREATE_REFLECTION = 'createReflection'

export function createReflection(subject, notice, description, then) {
  return {
    type: CREATE_REFLECTION,
    meta: {
      isHc: true,
      namespace: 'clutter',
      data: {
        notice,
        description
      },
      then
    }
  }
}