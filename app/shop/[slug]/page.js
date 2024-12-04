export default async function SlugPage({ params }) {
  // 例如: shop/1	可以得到 Promise<{ slug: '1' }>
  console.log(params)
  // const slug = (await params).slug
  const slug = params?.slug

  return <h1>slug: {slug}</h1>
}
