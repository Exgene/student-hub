export async function POST(req: Request) {
  const data = req.body
  console.log(req)
  console.log(data)
  return Response.json({ message: 'Hi' })
}

// {
//   "userId": "Hello",
//   "submittedBy": "Test",
//   "message": "values.feedback"
// }
