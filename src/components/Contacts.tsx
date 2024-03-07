'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from './ui/textarea'
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const Contacts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: Feedback submission!
    console.log('submitted', values)
  }
  return (
    <section className="text-primary min-h-screen" id="contact">
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
            className="space-y-8 w-full max-w-xl"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Geniune Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Eg: Improve the navbar for better accessibility....."
                      {...field}
                      className=" resize-none h-48"
                    />
                  </FormControl>
                  <FormDescription>
                    You can give us valuable feedback to improve this site!
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
