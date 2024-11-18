'use client'
 
import { useParams } from 'next/navigation'
 
export default function ProductSlugPage() {
  const params = useParams()
 
  // Route -> /product/[slug]
  // URL -> /product/nike-air-max-97
  // `params` -> { slug: 'nike-air-max-97' }
  console.log(params)
 
  return <h1>slug: {params.slug}</h1>
}