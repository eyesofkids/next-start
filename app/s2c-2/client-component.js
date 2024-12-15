'use client'

export default function ClientComponent({ data }) {
  console.log(data)

  return (
    <>
      <div>ClientComponent</div>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
