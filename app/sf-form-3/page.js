async function requestUsername(formData) {
  'use server'
  const username = formData.get('username')
  console.log(username)
  // ...
}

export default function App() {
  return (
    <form action={requestUsername}>
      <input type="text" name="username" />
      <button type="submit">Request</button>
    </form>
  )
}
