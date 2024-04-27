'use client'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import '../styles/navbar.css'
// import Image from 'next/image';
const Navbar = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScroll(isScrolled)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <nav
        className={`text-black p-4 sm:px-6 flex items-center justify-center z-[60] w-full h-20 fixed border-yellow-700 transition-colors duration-700 ${
          scroll ? 'bg-yellow-600' : 'bg-transparent'
        } ease-in-out`}
      >
        {/* Your existing content here */}
        <motion.div
          initial={{ width: 0, left: '50%', transform: 'translateX(-50%)' }}
          animate={{
            width: scroll ? '100%' : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
        ></motion.div>
        <Link
          href={'/#home'}
          className="text-lg flex items-center justify-center gap-2 absolute left-2"
        >
          {/* <StarFilledIcon className="mt-[2px]"></StarFilledIcon> */}
          <Image
            src={'/graduated.png'}
            alt="logo"
            width={20}
            height={20}
          ></Image>
          Students Hub
          {/* <Image src={'/logo/logo.png'} alt='logo' width={30} height={50}></Image> */}
        </Link>
        <div className="sm:flex gap-x-4 hidden">
          <Link
            href={'/'}
            className="font-extralight hover:font-normal duration-300"
          >
            About
          </Link>
          <Link
            href={'/#services'}
            className="font-extralight hover:font-normal duration-300"
          >
            Services
          </Link>
          <Link
            href={'/#socials'}
            className="font-extralight hover:font-normal duration-300"
          >
            Socials
          </Link>
        </div>
        <Link
          href={'/#contact'}
          className="font-extralight hover:font-normal duration-300 hidden sm:block absolute right-2"
        >
          Contact Us
        </Link>
        <div className="z-50 flex sm:hidden">
          <div id="menuToggle" className="py-6 pr-3">
            <input type="checkbox" />
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>

            <ul
              id="menu"
              className="bg-black bg-opacity-40 pr-4 text-right backdrop-blur-lg"
            >
              <a
                className="mt-10 text-2xl"
                href={`/`}
                // onClick={() => setOpened(!opened)}
              ></a>
              <div className="mt-6 flex flex-col items-end gap-y-4 text-2xl">
                <Link
                  href={'/'}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  About
                </Link>
                <Link
                  href={'#services'}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  Services
                </Link>
                <Link
                  href={'#socials'}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  Socials
                </Link>
                <Link
                  href={'#contact'}
                  className="font-extralight"
                  // onClick={() => setOpened(!opened)}
                >
                  Contact Us
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
