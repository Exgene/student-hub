import { db } from '@/server/db'

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

