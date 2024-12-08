'use client'

import { useFormState } from 'react-dom'
import { increment } from './actions.js'

export default function StatefulForm() {
  const [state, formAction] = useFormState(increment, 0)

  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}
