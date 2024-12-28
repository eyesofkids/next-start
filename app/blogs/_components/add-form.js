'use client'

import React, { useState, useEffect } from 'react'
import { createBlog } from '../_actions'
import { useFormState } from 'react-dom'

export default function AddForm() {
  const [state, action] = useFormState(createBlog, null)

  console.log('state', state)

  return (
    <>
      {state === 'successful' && <div>add successful</div>}
      <form action={action}>
        Title: <input type="text" name="title" />
        <br />
        Content: <textarea name="content" cols="30" rows="10" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
