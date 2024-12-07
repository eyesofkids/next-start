'use client'

import { callAction } from '../_actions'

export default function Button({ title }) {
  return (
    <>
      <button onClick={() => callAction()}>{title}</button>
    </>
  )
}
