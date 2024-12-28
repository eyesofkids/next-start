'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createBlog(preState, formData) {
  // 以下的程式碼是執行在伺服器上.
  const title = formData.get('title')
  const content = formData.get('content')

  console.log('title', title)
  console.log('content', content)

  const blog = await prisma.blog.create({
    data: {
      title: title,
      content: content,
    },
  })

  if (blog) {
    // Revalidating data
    // You can revalidate the Next.js Cache inside your Server Actions with the revalidatePath API:
    revalidatePath('/blogs')
    return 'successful'
  }
  return 'failed'
}

export async function removeBlog(preState, formData) {
  // 以下的程式碼是執行在伺服器上.
  const id = formData.get('id')
  console.log('id', id)

  const blog = await prisma.blog.delete({
    where: {
      id: Number(id),
    },
  })

  if (blog) {
    // revalidatePath('/blogs')
    return 'successful'
  }
  return 'failed'
}

export async function updateBlog(preState, formData) {
  // 以下的程式碼是執行在伺服器上.
  const title = formData.get('title')
  const content = formData.get('content')
  const id = formData.get('id')

  console.log('title', title)
  console.log('content', content)

  const blog = await prisma.blog.update({
    where: {
      id: Number(id),
    },
    data: {
      title: title,
      content: content,
    },
  })

  if (blog) {
    revalidatePath('/blogs')
    return 'successful'
  }
  return 'failed'
}
