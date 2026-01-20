import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  message: string
  locale?: 'fi' | 'en'
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON payload.' },
      { status: 400 }
    )
  }

  const name = payload?.name?.trim()
  const email = payload?.email?.trim()
  const message = payload?.message?.trim()

  if (!name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Missing or invalid fields.' },
      { status: 400 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: payload.locale === 'fi' ? 'Viesti vastaanotettu.' : 'Message received.'
  })
}
