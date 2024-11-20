import { NextResponse } from 'next/server'
import { getUserById } from '@/services/user'

export async function GET(request, { params }) {
  try {
    const id = (await params).id
    const user = await getUserById(id)
    return NextResponse.json({ status: 'success', data: { user } })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: e.message })
  }
}
