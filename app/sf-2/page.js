// import Button from './_components/button'
'use client'

import { loadUser } from './_actions'
import { useFormState } from 'react-dom'

export default function Page() {
  const [state, formAction, isPending] = useFormState(loadUser, [])
  console.log('state', state)
  console.log('isPending', isPending)

  return (
    <>
      <button onClick={() => formAction()}>load users</button>
      {isPending ? 'Loading...' : 'do pending'}
      <ul>
        {state.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}
