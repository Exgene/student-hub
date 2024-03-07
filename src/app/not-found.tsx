import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className='min-h-screen text-center grid place-content-center gap-y-4 h-full'>
      <h2 className='text-white pt-20 md:text-7xl sm:text-4xl text-2xl'>Page Not Found</h2>
      <p className='text-gray-600 text-sm sm:text-lg'>Could not find requested resource</p>
      <Link href="/" className=' text-gray-800 text-sm sm:text-lg'>Return Home</Link>
    </section>
  )
}