'use client'

import { loadUser } from '../_actions'
import { useFormState } from 'react-dom'

export default function Button({ title }) {
  const [state, formAction] = useFormState(loadUser, [])
  console.log('state', state)

  return (
    <>
      <button onClick={() => formAction()}>{title}</button>
    </>
  )
}
