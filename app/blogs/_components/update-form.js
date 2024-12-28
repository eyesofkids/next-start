'use client'

import React, { useState, useEffect } from 'react'
import { updateBlog } from '../_actions'
import { useFormState } from 'react-dom'

export default function UpdateForm({ blog }) {
  const [state, action] = useFormState(updateBlog, null)

  console.log('state', state)

  return (
    <>
      {state === 'successful' && <div>Update successful</div>}
      <form action={action}>
        <input type="text" name="title" defaultValue={blog?.title} />
        <br />
        <textarea
          name="content"
          cols="30"
          rows="10"
          defaultValue={blog?.content}
        />
        <br />
        <input type="hidden" name="id" defaultValue={blog?.id} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
