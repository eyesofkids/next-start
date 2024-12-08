'use server'

import prisma from '@/lib/prisma'

export async function getUsers() {
  // 以下的程式碼是執行在伺服器上
  const users = await prisma.user.findMany()
  console.log(users)

  return users
}

export async function callAction() {
  // 以下的程式碼是執行在伺服器上
  console.log('Button clicked from action')
  return '...'
}
