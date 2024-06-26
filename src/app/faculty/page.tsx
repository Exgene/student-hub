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
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import faculty, { allFaculty } from '@/lib/faculty'
import { PersonIcon } from '@radix-ui/react-icons'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const departments = Object.keys(faculty)

const FacultyPage = () => {
  unstable_noStore()
  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    departments[5] || '',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredFaculty, setFilteredFaculty] = useState<
    (typeof allFaculty)['Faculty']
  >(faculty[selectedDepartment] || [])

  useEffect(() => {
    if (faculty[selectedDepartment]) {
      setFilteredFaculty(
        //@ts-expect-error
        faculty[selectedDepartment].filter((data) =>
          data.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    }
    setIsLoading(false)
  }, [selectedDepartment, searchQuery])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleDepartmentChange = (newDepartment: string) => {
    setSelectedDepartment(newDepartment)
    // Reset the search query to prevent automatic opening of faculty cards
    setSearchQuery('')
  }

  return (
    <section className="min-h-screen text-black bg-yellow-500">
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold">Faculty</h1>
        <p className="text-gray-800">Meet our esteemed faculty members</p>
      </div>
      <div className="flex justify-center sm:w-2/3 w-full mx-auto p-6 gap-2">
        <Input
          type="text"
          placeholder="Search Faculty"
          className="w-full mx-auto bg-black text-white"
          onChange={handleSearch}
        />
        <Select onValueChange={handleDepartmentChange}>
          <SelectTrigger className="flex-shrink w-32 text-black border-black">
            <SelectValue
              placeholder={
                <div className="flex w-full items-center gap-1">
                  <PersonIcon className="w-4 h-4"></PersonIcon>
                  <p>Dept.</p>
                </div>
              }
            >
              <div className="flex w-full items-center gap-1">
                <PersonIcon className="w-4 h-4"></PersonIcon>
                <p>Dept.</p>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectGroup>
              <SelectLabel>Department</SelectLabel>
              {departments.map((department) => (
                <SelectItem
                  key={department}
                  value={department}
                  className="focus:bg-white focus:text-gray-950"
                >
                  {department}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-black pt-20 flex w-full flex-wrap justify-center h-full p-10 gap-10">
        {filteredFaculty.map((data) => {
          return (
            <Dialog key={data.name}>
              <DialogTrigger key={data.name}>
                <Card
                  className="w-[280px] bg-yellow-600 border-none shadow-2xl"
                  key={data.img_src}
                >
                  <CardHeader>
                    <CardTitle>
                      <p key={data.img_src} className="text-black">
                        {data.name}
                      </p>
                    </CardTitle>
                    <CardDescription>
                      <p key={data.img_src} className="text-gray-800">
                        {data.designation}
                      </p>
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
                        className="filter sm:grayscale-[60%] hover:grayscale-0 duration-150"
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

export default FacultyPage
