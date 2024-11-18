// export default async function ShopPage({ searchParams }) {
//   const sp = await searchParams
//   return <h1>searchParams: {JSON.stringify(sp)}</h1>
// }

'use client'

// import { use } from 'react'

export default function Page({ searchParams }) {
  //const { slug } = use(params)
  console.log(typeof searchParams)
  const sp = searchParams
  //   const sp = use(searchParams)
  return <h1>searchParams: {JSON.stringify(sp)}</h1>
}
