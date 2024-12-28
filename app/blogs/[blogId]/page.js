import prisma from '@/lib/prisma'
import UpdateForm from '../_components/update-form'

export default async function BlogIdPage({ params }) {
  console.log(params)

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(params.blogId),
    },
  })

  return (
    <>
      <h1>BlogIdPage</h1>
      <div>{blog.title}</div>
      <div>{blog.content}</div>
      <UpdateForm blog={blog} />
    </>
  )
}
