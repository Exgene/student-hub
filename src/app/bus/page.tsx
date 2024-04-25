'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MNG_BUS_TIMINGS, UDP_BUS_TIMINGS } from '@/lib/bus-timings'
import { ClockIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

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
        (busTimings[0].hour + 24) * 60 + busTimings[0].minute -
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
    <section className="min-h-screen text-primary">
      <div className="pt-16">
        <h1 className="text-center sm:text-5xl text-3xl w-full bg-primary-foreground md:p-10 p-6 flex items-center justify-center">
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
          className={`w-full py-6 border hover:bg-white hover:text-black ${
            route === 'Udupi' ? 'bg-white text-black' : ''
          }`}
          variant={'ghost'}
          onClick={() => setRoute('Udupi')}
        >
          Udupi
        </Button>
        <Button
          className={`w-full py-6 border hover:bg-white hover:text-black ${
            route === 'MNG' ? 'bg-white text-black' : ''
          }`}
          variant={'ghost'}
          onClick={() => setRoute('MNG')}
        >
          MNG
        </Button>
      </div>
      <div>
        {route === 'Udupi' ? (
          <div className="grid lg:max-w-4xl self-center pb-16 md:max-w-xl max-w-xs mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 px-2">
            {UDP_BUS_TIMINGS.map((bus, index) => (
              <Card
                key={index}
                className={`max-w-xl border-none flex flex-col rounded-none p-6 ${
                  index % 2 ? '' : 'bg-card-ODD'
                } pb-4`}
              >
                <div className="text-2xl font-medium">{bus.name}</div>

                <div className="text-gray-300 flex items-center gap-2 text-xl font-normal pt-4 pb-2">
                  <ClockIcon></ClockIcon>
                  <p>
                    {bus.hour % 13 === 0 ? (bus.hour % 13) + 1 : bus.hour % 13}:
                    {bus.minute === 0 ? '00' : bus.minute}{' '}
                    {bus.period.toUpperCase()}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:max-w-4xl pb-16 md:max-w-xl max-w-xs mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 px-2">
            {MNG_BUS_TIMINGS.map((bus, index) => (
              <Card
                key={index}
                className={`max-w-xl border-none flex flex-col rounded-none p-6 ${
                  index % 2 ? '' : 'bg-card-ODD'
                } pb-4`}
              >
                <div className="text-2xl font-medium">{bus.name}</div>
                <div className="text-gray-300 flex items-center gap-2 text-xl font-normal pt-4 pb-2">
                  <ClockIcon></ClockIcon>
                  <p>
                    {bus.hour % 13 === 0 ? (bus.hour % 13) + 1 : bus.hour % 13}:
                    {bus.minute === 0 ? '00' : bus.minute}{' '}
                    {bus.period.toUpperCase()}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BusRoute
