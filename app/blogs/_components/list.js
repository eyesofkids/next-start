'use client'

import React, { useState, useEffect } from 'react'
import {useRouter} from "next/navigation"
import RemoveForm from './remove-form'

export default function List({ blogs }) {
  return (
    <>
      <h1>List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={`/blogs/${blog.id}`}>{blog.title}</a>
            <RemoveForm blogId={blog.id} />
          </li>
        ))}
      </ul>
    </>
  )
}
