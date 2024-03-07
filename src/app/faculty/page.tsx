'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import facultyData from '@/lib/faculty'
import Image from 'next/image'
import React from 'react'

const Faculty = () => {
  return (
    <section className="min-h-screen bg-background">
      <div className="bg-white">
        <h1 className="text-black pb-[2rem] pt-[calc(4rem+2rem)] text-center text-3xl font-medium">
          CS Faculty
        </h1>
      </div>

      <div
        className="text-white pt-20 flex w-full flex-wrap justify-center h-full p-10 gap-10"
        key={0}
      >
        {facultyData.map((data) => {
          return (
            <Dialog key={data.name}>
              <DialogTrigger key={data.name}>
                <Card
                  className="w-[280px] bg-foreground border-none"
                key={data.img_src}
                >
                  <CardHeader>
                    <CardTitle>
                      <p key={data.img_src}>{data.name}</p>
                    </CardTitle>
                    <CardDescription>
                      <p key={data.img_src}>{data.designation}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="relative border w-full aspect-square "
                      key={data.name}
                    >
                      <Image
                        src={data.img_src}
                        alt={data.name + 'Image'}
                        fill
                        className="filter sm:grayscale hover:grayscale-0 duration-150"
                      ></Image>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="text-white max-w-2xl">
                <DialogDescription className="w-full">
                  <div className="flex gap-x-4">
                    <div className="relative border-4 w-2/3 aspect-square rounded-full">
                      <Image
                        src={data.img_src}
                        alt={data.name + 'Image'}
                        fill
                        className="rounded-full object-cover"
                      ></Image>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <p className="text-white font-medium text-lg">
                        {data.name}
                      </p>
                      <Separator></Separator>
                      <p>{data.designation}</p>
                    </div>
                  </div>
                  <div>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full text-white"
                    >
                      {data.info.map((info, index) => {
                        const key = Object.keys(info)[0]
                        //@ts-expect-error It will never be undefined
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        const value = info[key]
                        return (
                          <AccordionItem value={'items' + index}>
                            <AccordionTrigger>{key}</AccordionTrigger>
                            <AccordionContent className="overflow-y-scroll h-24 text-muted-foreground">
                              {value}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </section>
  )
}

export default Faculty
