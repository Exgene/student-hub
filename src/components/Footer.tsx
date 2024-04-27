import Link from 'next/link'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <footer className="text-black flex flex-col text-center items-center justify-center bg-yellow-600 border-t-[1px] border-black">
      <h2 className="text-xl font-medium px-6 pt-6 pb-3">Follow Us</h2>
      <Separator className="w-20 mb-6 bg-black"></Separator>
      <div className="flex max-w-xs md:max-w-3xl flex-wrap gap-x-4 gap-y-2 justify-center text-gray-800 mb-4">
        <Link href={'/'} className='hover:text-black duration-150'>Instagram</Link>
        <Link href={'/'} className='hover:text-black duration-150'>Twitter</Link>
        <Link href={'/'} className='hover:text-black duration-150'>GitHub</Link>
        <Link href={'/'} className='hover:text-black duration-150'>LinkedIn</Link>
        <Link href={'/'} className='hover:text-black duration-150'>LinkTree</Link>
        <Link href={'/'} className='hover:text-black duration-150'>COC</Link>
      </div>
      <p className="font-extralight">Made with ❤ by students!</p>
      <h3 className='text-base font-medium py-2 pb-8'>Students Hub @ {new Date().getFullYear()}</h3>
    </footer>
  )
}

export default Footer
