'use server'

export async function increment(previousState, formData) {
  return previousState + 1
}
