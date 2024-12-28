'use client'

import React, { useState, useEffect } from 'react'
import { removeBlog } from '../_actions'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function RemoveForm({ blogId }) {
  const [state, action] = useFormState(removeBlog, null)
  const router = useRouter()

  console.log('state', state)

  // https://stackoverflow.com/questions/75124513/update-server-component-after-data-has-been-changed-by-client-component-in-next/75127011#75127011
  if (state === 'successful') {
    alert('Delete successful')
    router.refresh()
  }

  return (
    <>
      {/* {state === 'successful' && <span>Delete successful</span>} */}
      <form action={action}>
        <input type="hidden" name="id" defaultValue={blogId} />
        <button type="submit">Delete</button>
      </form>
    </>
  )
}
