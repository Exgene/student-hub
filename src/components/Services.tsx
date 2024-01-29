import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'

import { CardValue } from '@/lib/services-cards'

const Services = () => {
  return (
    <section
      className="text-primary min-h-screen bg-background mb-20"
      id="services"
    >
      <h1 className="text-center sm:text-5xl text-3xl w-full bg-primary-foreground md:p-10 p-6 flex items-center justify-center">
        Services
      </h1>
      <div className="grid lg:max-w-4xl md:max-w-xl max-w-xs mx-auto gap-x-4 md:gap-y-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 px-2">
        {CardValue.map((card, index) => (
          <Card
            className={`max-w-xl border-none flex flex-col rounded-none ${
              index % 2 ? '' : 'bg-card-ODD'
            } pb-8`}
            key={index}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-normal">
                {card.cardTitle}
              </CardTitle>
              <CardDescription className="text-primary text-2xl font-normal pt-8 pb-2">
                0{index + 1}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow text-right font-extralight">
              <p>{card.cardValue}</p>
            </CardContent>
            <CardFooter className="self-end">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services
