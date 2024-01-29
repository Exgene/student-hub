'use client'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useState } from 'react'
import '../styles/navbar.css'
// import Image from 'next/image';
const Navbar = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <nav className="text-primary p-4 sm:px-6 flex items-center justify-between bg-background w-full fixed z-40 border-b-2">
        <Link
          href={'#home'}
          className="text-lg flex items-center justify-center gap-2"
        >
          <HeartFilledIcon className="mt-[2px]"></HeartFilledIcon>
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
            href={'#services'}
            className="font-extralight hover:font-normal duration-300"
          >
            Services
          </Link>
          <Link
            href={'#socials'}
            className="font-extralight hover:font-normal duration-300"
          >
            Socials
          </Link>
        </div>
        <Link
          href={'#contact'}
          className="font-extralight hover:font-normal duration-300 hidden sm:block"
        >
          Contact Us
        </Link>
        <div className="z-50 flex sm:hidden">
          <div id="menuToggle" className="py-6 pr-3">
            <input type="checkbox" />
            <span className="bg-primary"></span>
            <span className="bg-primary"></span>
            <span className="bg-primary"></span>

            <ul
              id="menu"
              className="bg-black bg-opacity-40 pr-4 text-right backdrop-blur-lg"
            >
              <a
                className="mt-10 text-2xl"
                href={`/`}
                onClick={() => setOpened(!opened)}
              ></a>
              <div className="mt-6 flex flex-col items-end gap-y-4 text-2xl">
                <Link
                  href={'/'}
                  className="font-extralight"
                  onClick={() => setOpened(!opened)}
                >
                  About
                </Link>
                <Link
                  href={'#services'}
                  className="font-extralight"
                  onClick={() => setOpened(!opened)}
                >
                  Services
                </Link>
                <Link
                  href={'#socials'}
                  className="font-extralight"
                  onClick={() => setOpened(!opened)}
                >
                  Socials
                </Link>
                <Link
                  href={'#contact'}
                  className="font-extralight"
                  onClick={() => setOpened(!opened)}
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
