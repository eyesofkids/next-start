import prisma from '../lib/prisma.js'

export const getUsers = async () => {
  // 使用findMany方法取得所有使用者資料
  const users = await prisma.user.findMany()

  // 不回傳密碼，刪除密碼屬性
  users.forEach((user) => {
    delete user.password
  })

  return users
}

// 獲得單筆使用者資料
export const getUserById = async (userId) => {
  if (!userId) {
    // 如果沒有userId，拋出錯誤。這錯誤在route層級被捕獲，在error.message中回傳給前端
    throw new Error('缺少必要參數')
  }

  // 轉為數字
  const id = typeof userId === 'number' ? userId : Number(userId)

  // 使用findUnique方法取得單筆使用者資料
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  // user=null，表示無此會員資料
  if (!user) {
    throw new Error('無此會員資料')
  }

  // 不回傳密碼，刪除密碼屬性
  delete user.password

  return user
}
