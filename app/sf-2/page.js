// import Button from './_components/button'
'use client'

import { loadUser } from './_actions'
import { useFormState } from 'react-dom'

export default function Page() {
  const [state, formAction] = useFormState(loadUser, [])

  return (
    <>
      <button onClick={() => formAction()}>get Users</button>
      <ul>
        {state.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}
