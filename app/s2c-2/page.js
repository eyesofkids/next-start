import ClientComponent from './client-component'

export default async function Page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  return <ClientComponent data={data} />
}
