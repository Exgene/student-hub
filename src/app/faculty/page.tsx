'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import faculty, { allFaculty } from '@/lib/faculty'
import React, { useState } from 'react'

const departments = Object.keys(faculty)

const FacultyPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0])

  return (
    <section className="min-h-screen text-primary">
      <div className="pt-16">FacultyPage</div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectGroup>
            <SelectLabel>Department</SelectLabel>
            {/* <SelectItem className="" value="apple">
              Apple
            </SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
      {JSON.stringify(faculty[selectedDepartment])}
    </section>
  )
}

export default FacultyPage
