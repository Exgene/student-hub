import { authOptions } from '@/server/auth'
import { db } from '@/server/db'
import { getServerSession } from 'next-auth'

export async function POST(req: Request) {
  const data = (await req.json()) as {
    submittedBy: string
    userId: string
    message: string
  }
  console.log(data.submittedBy)
  console.log(data.userId)
  console.log(data.message)
  await db.feedback.create({
    data: {
      submittedBy: data.submittedBy,
      userId: data.userId,
      message: data.message,
    },
  })
  console.log(req)
  console.log(data)
  return Response.json({ message: 'Hi' })
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return new Response('Unauthorized', { status: 401 })
  if (
    session.user.email !== process.env.ADMIN_EMAIL1 &&
    session.user.email !== process.env.ADMIN_EMAIL2
  )
    return new Response('Unauthorized', { status: 401 })

  const feedback = await db.feedback.findMany()
  return Response.json(feedback)
}
