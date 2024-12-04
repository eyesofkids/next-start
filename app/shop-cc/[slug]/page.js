'use client'

import { use } from 'react'

export default function Page({ params, searchParams }) {
  // const { slug } = use(params)
  // const { query } = use(searchParams)
  // const { slug } = params
  // const { query } = searchParams
  console.log(searchParams)
  console.log(params)

  return <h1>params: {JSON.stringify(params)}</h1>
}

// export default async function SlugPage({params}) {
//   // 例如: shop/1	可以得到 Promise<{ slug: '1' }>
//   console.log(params)
//   // const slug = (await params).slug
//   const slug = params?.slug

//   return <h1>slug: {slug}</h1>
// }
