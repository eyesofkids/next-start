'use client'

import React, { useState, useEffect } from 'react'
import { use } from 'react'

export default function Comments({ commentsPromise }) {
  // NOTE: this will resume the promise from the server.
  // It will suspend until the data is available.
  const comments = use(commentsPromise)
  return comments.map((comment) => <p key={comment.id}>{comment.name}</p>)
}
