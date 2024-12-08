'use server'

export async function requestUsername(prevState, formData) {
  const username = formData.get('username')
  console.log(username)
  // ...
}
