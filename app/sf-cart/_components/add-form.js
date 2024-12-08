'use client'

import { useFormState } from 'react-dom'
// import { useActionState } from 'react'
import { addToCart } from '../_actions'

export default function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction] = useFormState(addToCart, null)

  console.log('message', message)
  const isPending = message === null

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? 'Loading...' : message}
    </form>
  )
}
