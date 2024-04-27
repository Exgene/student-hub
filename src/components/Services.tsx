'use client'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

import { CardValue } from '@/lib/services-cards'
import Link from 'next/link'
import { DotBackgroundDemo } from './background-boxes'
import { WobbleCard } from './ui/wobble-card'

const Services = () => {
  return (
    <section className="relative text-primary" id="services">
      <DotBackgroundDemo>
        <h1 className="text-center sm:text-5xl text-3xl w-full bg-primary-foreground md:p-16 p-6 flex items-center justify-center">
          Services
        </h1>
        <div className="grid lg:max-w-4xl md:max-w-xl max-w-xs mx-auto gap-x-4 gap-y-2 md:gap-y-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 px-2">
          {CardValue.map((card, index) => (
            <>
              <WobbleCard
                key={index}
                containerClassName="relative col-span-1 max-w-xl"
              >
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {card.cardTitle}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  {card.cardValue}
                </p>
                <Button
                  onClick={() => (window.location.href = card.cardLink)}
                  className="absolute top-0 left-0 rounded-full p-4 aspect-square"
                >
                  <PaperPlaneIcon className="w-2 h-2 -rotate-45"></PaperPlaneIcon>
                </Button>
              </WobbleCard>
            </>
          ))}
        </div>
      </DotBackgroundDemo>
    </section>
  )
}

export default Services
