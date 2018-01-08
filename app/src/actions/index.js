export const CREATE_REFLECTION = 'reflectionCreate'

export function createReflection(reflection, then) {
  return {
    type: CREATE_REFLECTION,
    meta: {
      isHc: true,
      namespace: 'reflections',
      data: reflection,
      then
    }
  }
}