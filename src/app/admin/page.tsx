'use client'

import { Feedback } from '@prisma/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [error, setError] = useState<boolean>(false)
  async function getFeedback() {
    try {
      const res = await fetch('/api/feedback')
      const data = await res.json()
      setFeedback(data)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }
  useEffect(() => {
    getFeedback()
  })
  return feedback.length === 0 && error === false ? (
    <div className="bg-yellow-500 min-h-screen text-4xl items-center text-center flex text-black p-10">
      <p className="w-full">Loading...</p>
    </div>
  ) : error === false ? (
    <div className="bg-yellow-500 min-h-screen text-black p-10 pt-20">
      <Table className="max-w-5xl mx-auto pt-20">
        <TableCaption className='font-bold text-black text-xl'>List of all feedbacks.</TableCaption>
        <TableHeader>
          <TableRow className="text-black">
            <TableHead className="text-black">Name</TableHead>
            <TableHead className="text-black">UID</TableHead>
            <TableHead className="text-black">TimeStamp</TableHead>
            <TableHead className="text-right text-black">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feedback.map((feed, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feed.submittedBy}</TableCell>
              <TableCell>{feed.id}</TableCell>
              <TableCell>{feed.updatedAt.toString()}</TableCell>
              <TableCell className="text-right">{feed.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Feedbacks</TableCell>
            <TableCell className="text-right">{feedback.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ) : (
    <div className="bg-yellow-500 min-h-screen text-4xl items-center text-center flex text-black p-10">
      <p className="w-full">Error You cannot visit this page</p>
    </div>
  )
}

export default Admin

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
