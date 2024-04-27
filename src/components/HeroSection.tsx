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
import { BackgroundBeams } from './ui/background-beams'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="text-black bg-yellow-500 h-screen" id="home">
      <div className="relative w-full h-full flex flex-col justify-center items-center px-4 pt-20 gap-4">
        <BackgroundBeams></BackgroundBeams>
        <motion.h1 className="lg:text-7xl z-10 md:text-4xl text-3xl font-bold lg:max-w-4xl md:max-w-xl max-w-none text-center">
          Welcome to NMAMIT's Student HUB
        </motion.h1>
        <motion.p className="sm:text-lg text-sm leading-6 sm:leading-normal font-extralight md:max-w-2xl max-w-none gap-6 p-10 text-center">
          Discover a seamless and engaging experience with NMAMIT STUDENT'S HUB,
          a website designed to provide college students with all the
          information they need about their faculty and campus. This site will
          get you started with your journey in Nitte.
        </motion.p>
        <motion.div className="flex z-50 gap-2">
          <SignInBtn stylesBtn="sm:w-28 sm:h-10 text-sm" />
          <Button
            className="sm:w-28 sm:h-10 bg-black text-white hover:text-white hover:bg-black"
            onClick={() => {
              const servicesSection = document.getElementById('services')
              if (servicesSection) {
                window.scrollTo({
                  top: servicesSection.offsetTop,
                  behavior: 'smooth',
                })
              }
            }}
          >
            Browse
          </Button>
        </motion.div>
      </div>
      {/* <div className="flex mt-10 lg:gap-20 gap-4 lg:flex-row flex-col items-center justify-center">
        <motion.div className="flex flex-col md:max-w-lg max-w-none gap-6 p-10">
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
      </div> */}
    </section>
  )
}

export default HeroSection
