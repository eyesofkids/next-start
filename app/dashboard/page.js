'use client'
import { useSearchParams } from 'next/navigation'
 
export default function DashboardPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <h1>Search: {search}</h1>
}