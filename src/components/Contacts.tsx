'use client'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useSession } from 'next-auth/react'
import { useRef, useState } from 'react'
import { Textarea } from './ui/textarea'
const formSchema = z.object({
  feedback: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const Contacts = () => {
  const { data: session } = useSession()
  const usernameRef = useRef<string | null | undefined>('anonymous')
  const useridRef = useRef<string | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: Feedback submission!

    if (session?.user) {
      alert('Session Exists!')
      usernameRef.current = session.user.name
      useridRef.current = session.user.id
    }
    const res = await fetch('/api/feedback', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        submittedBy: usernameRef.current,
        userId: useridRef.current,
        message: values.feedback,
      }),
    })
    // alert(JSON.stringify(res))
    // await db.feedback.create({
    //   data:{
    //     submittedBy:userName,
    //     userId,
    //     message:values.feedback,
    //   }
    // })
    console.log('submitted', values)
  }
  return (
    <section
      className="text-primary min-h-screen flex flex-col items-center bg-yellow-500 bg-dot-black/20 justify-center"
      id="contact"
    >
      <div className="h-64 text-gray-600 relative bg-white flex flex-col justify-center items-start px-6 sm:px-52 lg:px-96 gap-2">
        {/* <Image
          src={'/18703.jpg'}
          alt="contact image"
          fill
          className="object-cover bg-black -z-10"
        /> */}
        <h2 className="text-blue-600 text-4xl md:text-6xl font-bold">
          Contact
        </h2>
        <p className="font-medium text-base md:text-xl">
          Please feel free to call or email us, or use our contact form to get
          in touch with us. We look forward to hearing from you
        </p>
      </div>
      <div className="w-full flex justify-center p-10 flex-grow">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full text-base max-w-3xl text-black"
          >
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-4xl font-medium text-black">
                    Geniune Feedback
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none h-64 text-base placeholder:text-white text-white border-black bg-black"
                      placeholder="Eg: Improve the navbar for better accessibility....."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-lg text-black">
                    You can give us valuable feedback to improve this site! The
                    Developer will be consistently updating the website for new
                    features!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default Contacts
