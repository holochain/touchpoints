export const CREATE_REFLECTION = 'reflectionCreate'

export function createReflection(notice, description, stamp, then) {
  return {
    type: CREATE_REFLECTION,
    meta: {
      isHc: true,
      namespace: 'reflections',
      data: {
        notice,
        description,
        stamp
      },
      then
    }
  }
}