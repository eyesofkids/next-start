// Server Component
// import db from './database'
import { Suspense } from 'react'
import Comments from './comments'

export default async function Page({ params }) {
  const id = (await params).id

  console.log(id)
  // Will suspend the Server Component.
  //   const note = await db.notes.get(id)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const note = (await res.json()).title

  // NOTE: not awaited, will start here and await on the client.
  const res2 = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
  )
  const data = await res2.json()

  // NOTE: This will be resolve on the client. (use() hook can be used)
  const commentsPromise = new Promise(function (resolve, reject) {
    resolve(data)
  })

  return (
    <div>
      <h1>{note}</h1>
      <Suspense fallback={<p>Loading Comments...</p>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  )
}
