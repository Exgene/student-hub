'use client'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { MNG_BUS_TIMINGS, UDP_BUS_TIMINGS } from '@/lib/bus-timings';
import { ClockIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';

const BusRoute = () => {
  type RouteType = 'Udupi' | 'MNG'
  const [route, setRoute] = useState<RouteType>('Udupi')

  function calculateNextBusTime() {
    const now = new Date()
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes()
    let busTimings: { hour: number; minute: number }[] = []
    if (route === 'Udupi') {
      busTimings = UDP_BUS_TIMINGS
    } else {
      busTimings = MNG_BUS_TIMINGS
    }
    const nextBus = busTimings.find(
      (bus) => bus.hour * 60 + bus.minute > currentTimeInMinutes,
    )
    if (nextBus === undefined) {
      const newTime =
        //@ts-expect-error It will never be null
        (busTimings[0].hour + 24) * 60 +
        //@ts-expect-error It will never be null
        busTimings[0].minute -
        currentTimeInMinutes
      const hours = Math.floor(newTime / 60)
      const minutes = newTime % 60
      if (hours > 0) {
        return `${hours} hours ${minutes} minutes`
      }
      return `${minutes} minutes`
    }
    const nextBusTimeInMinutes = nextBus.hour * 60 + nextBus.minute
    const timeRemaining = nextBusTimeInMinutes - currentTimeInMinutes
    const hours = Math.floor(timeRemaining / 60)
    const minutes = timeRemaining % 60
    if (hours > 0) {
      return `${hours} hours ${minutes} minutes`
    }
    return `${minutes} minutes`
  }
  useEffect(() => {
    const interval = setInterval(() => {
      calculateNextBusTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen text-black bg-yellow-500">
      <div className="pt-20">
        <h1 className="text-center sm:text-5xl text-3xl w-full bg-white md:p-10 p-6 flex items-center justify-center">
          Bus Timings
        </h1>
      </div>
      <div>
        <h2 className="text-center text-3xl pt-8">
          Next Bus to {route} in : {calculateNextBusTime()}
        </h2>
      </div>
      {/* <h2>Next Bus in : {timeRemaining}</h2> */}
      <div className="w-full max-w-xl gap-x-2 mx-auto flex p-10">
        <Button
          className={`w-full py-6 hover:bg-white hover:text-black ${
            route === 'Udupi' ? 'bg-black text-white ' : 'border border-black'
          }`}
          variant={'ghost'}
          onClick={() => setRoute('Udupi')}
        >
          Udupi
        </Button>
        <Button
          className={`w-full py-6  hover:bg-white hover:text-black ${
            route === 'MNG' ? 'bg-black text-white' : 'border border-black'
          }`}
          variant={'ghost'}
          onClick={() => setRoute('MNG')}
        >
          MNG
        </Button>
      </div>
      <div>
        {route === 'Udupi' ? (
          <HoverEffect items={UDP_BUS_TIMINGS} />
        ) : (
          <HoverEffect items={MNG_BUS_TIMINGS} />
        )}

        {/* <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div> */}
      </div>
    </section>
  )
}

export default BusRoute
