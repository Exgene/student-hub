'use client'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SignInBtn from './SignInBtn'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <section className="text-primary min-h-screen bg-foreground" id="home">
      <div className="relative w-full h-96 bg-[radial-gradient(ellipse_at_center_200px,_var(--tw-gradient-stops))] from-hero to-primary-foreground to-[80%] flex flex-col justify-center items-center px-4">
        <div className="flex flex-col gap-y-4">
          <motion.h1
            className="lg:text-6xl md:text-4xl text-2xl font-medium lg:max-w-4xl md:max-w-xl max-w-none"
          >
            Welcome to NMAMIT's Student HUB
          </motion.h1>
          <motion.div>
            <SignInBtn stylesBtn="w-28 h-10" />
          </motion.div>
        </div>

        <Image
          src={'/Student.png'}
          alt="hero image"
          width={'320'}
          height={1}
          className="absolute top-16 right-10 hidden md:block"
        />
      </div>
      <div className="flex mt-10 lg:gap-20 gap-4 lg:flex-row flex-col items-center justify-center">
        <motion.div
          className="flex flex-col md:max-w-lg max-w-none gap-6 p-10"
        >
          <h1 className="sm:text-4xl text-3xl font-medium leading-10">
            Comprehensive College Website
          </h1>
          <motion.p
            className="sm:text-base text-sm leading-6 sm:leading-normal font-extralight"
            transition={{ delay: 0.1 }}
          >
            Discover a seamless and engaging experience with NMAMIT STUDENT'S
            HUB, a website designed to provide college students with all the
            information they need about their faculty and campus. With
            interactive features and easy navigation, STUDENT'S HUB is the
            ultimate college website.
          </motion.p>
          <Button className="max-w-[100px] h-10">Read More</Button>
        </motion.div>
        <div className="">
          <motion.div
            className="relative sm:w-[450px] w-80 h-40 sm:h-60"
          >
            <Image
              sizes="(max-width: 600px) 100vw, 500px"
              src={'/StudentGroup.jpg'}
              alt="test"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>

          <motion.div
            className="flex mt-4 px-4 gap-x-4 justify-center lg:justify-start mb-4"
          >
            <Link
              href={'https://instagram.com/test'}
              className="hover:scale-110 duration-300"
            >
              <InstagramLogoIcon height={20} width={20} />
            </Link>
            <Link
              href={'https://instagram.com/test'}
              className="hover:scale-110 duration-300"
            >
              <TwitterLogoIcon height={20} width={20} />
            </Link>
            <Link
              href={'https://instagram.com/test'}
              className="hover:scale-110 duration-300"
            >
              <LinkedInLogoIcon height={20} width={20} />
            </Link>
            <Link
              href={'https://instagram.com/test'}
              className="hover:scale-110 duration-300"
            >
              <GitHubLogoIcon height={20} width={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
