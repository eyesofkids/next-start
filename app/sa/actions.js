'use server'

export async function updateUser(userId, formData) {}
export async function create() {}
export async function createInvoice(formData) {}

export async function requestUsername(preState, formData) {
  const username = formData.get('username')
  if (username) {
    // ...
    return 'successful'
  }
  return 'failed'
}
