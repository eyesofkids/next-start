import { NextResponse } from 'next/server'
import { getUsers, getUserById } from '@/services/user'

export async function GET(request, { params }) {
  try {
    const users = await getUsers()

    return NextResponse.json({ status: 'success', data: { users } })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: e.message })
  }
}
