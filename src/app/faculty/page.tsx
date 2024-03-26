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
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import faculty, { allFaculty } from '@/lib/faculty'
import Image from 'next/image'
import React from 'react'
import { Label } from '@radix-ui/react-label'

const departments = Object.keys(faculty)

const Faculty = () => {
  const [department, setDepartment] = React.useState<string>('Faculty')
  const [facultyData, setFacultyData] = React.useState(allFaculty[department])
  const [searchQuery, setSearchQuery] = React.useState('')

  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState(departments)

  const handleChangeDept = (dept: string) => {
    console.log(dept)
    setOpen(false)
    setDepartment(dept)
    setFacultyData(faculty[dept])
  }

  const handleSearchInput = (e: {
    preventDefault: () => void
    target: HTMLInputElement
  }) => {
    e.preventDefault()
    const target = e.target.value

    if (target.length > 0) {
      const regex = new RegExp(target, 'i')
      const result = departments.filter((dept) => dept.match(regex))
      setSearch(result)
    } else {
      setSearch(departments)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSearchQuery(event?.target?.value)
  }

  const filteredFaculty = facultyData?.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="min-h-screen bg-background">
      <div className="text-black pb-[2rem] pt-[calc(4rem+2rem)] text-center text-2xl font-medium w-full bg-white">
        {department}
      </div>
      <div className="flex justify-center mt-6">
        <Input
          type="text"
          placeholder="Search faculty by name"
          value={searchQuery}
          onFocus={() => {
            setOpen(true)
          }}
          onBlur={() => {
            setTimeout(() => {
              setOpen(false)
              // Time to prevent instant blur
            }, 300)
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(event)
          }
          className="px-4 py-2 border max-w-lg text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div
          className={`z-[10] flex justify-center mt-10 bg-[#0f0f0f] ${open ? 'absolute' : 'hidden'}`}
        >
          <ScrollArea className="px-4 py-2 border max-w-lg max-h-80 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {search.length > 0 ? (
              search.map((dept, index) => {
                return (
                  <>
                    <Separator
                      className={`h-[2px] ${index === 0 ? 'hidden' : ''}`}
                    />
                    <Button
                      className="bg-[#0f0f0f] text-white w-full hover:text-black"
                      onClick={() => handleChangeDept(dept)}
                    >
                      <Label className="">{dept}</Label>
                    </Button>
                  </>
                )
              })
            ) : (
              <>
                <Label className="text-[#181818] bg-[#0f0f0f] font-medium">
                  No such department
                </Label>
              </>
            )}
          </ScrollArea>
        </div>
      </div>
      <div
        className="text-white pt-20 flex w-full flex-wrap justify-center h-full p-10 gap-10"
        key={0}
      >
        {filteredFaculty?.map((data, index) => {
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
                        priority={index < 8 ? true : false}
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
