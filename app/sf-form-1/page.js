'use client'

// import { useActionState } from 'react'
import { useFormState } from 'react-dom'
import { addToCart } from './actions.js'

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction] = useFormState(addToCart, null)

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {message}
      {/* {isPending ? 'Loading...' : message} */}
    </form>
  )
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  )
}
