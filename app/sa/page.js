'use client'

// import { useActionState } from 'react'
import { useFormState } from 'react-dom'
import { requestUsername } from './actions'

export default function Page() {
  const [state, action] = useFormState(requestUsername, null, 'n/a')

  return (
    <>
      <form action={action}>
        <input type="text" name="username" />
        <button type="submit">Request</button>
      </form>
      <p>Last submission request returned: {state}</p>
    </>
  )
}
