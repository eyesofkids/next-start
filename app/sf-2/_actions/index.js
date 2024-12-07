'use server'

import prisma from '@/lib/prisma'

export async function callAction() {
  // 以下的程式碼是執行在伺服器上.
  console.log('Button clicked from action')
  return '...'
}

export async function loadUser() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  const users = await prisma.user.findMany()
  console.log(users)

  return users
}
