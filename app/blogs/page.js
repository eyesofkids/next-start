import prisma from '@/lib/prisma'
import List from './_components/list'
import AddForm from './_components/add-form'

export default async function BlogsPage(props) {
  const blogs = await prisma.blog.findMany()
  console.log(blogs)

  return (
    <>
      <h1>BlogsPage</h1>
      <List blogs={blogs} />
      <br />
      <AddForm />
    </>
  )
}
