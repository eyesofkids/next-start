'use client'

import { useFormState } from 'react-dom'
import { getUsers } from '../_actions'

export default function Button({ title }) {
  const [state, formAction] = useFormState(getUsers, [])

  return (
    <>
      <button onClick={() => formAction()}>{title}</button>
    </>
  )
}
