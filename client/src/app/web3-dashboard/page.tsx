"use client"
import React from 'react'
import Hydra from '@/components/shaders/Hydra'
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell } from "@/components/ui/table" // import components from your code

//

export default function page() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Hydra />
      </div>
      <div className='text-white'>
      <Table className="shadow-lg border">
        <TableHeader>
          <TableRow>
            <TableHead className='text-white'>ID</TableHead>
            <TableHead className='text-white'>Name</TableHead>
            <TableHead className='text-white'>Address</TableHead>
            <TableHead className='text-white'>Time Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>29</TableCell>
            <TableCell>New York</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>34</TableCell>
            <TableCell>Los Angeles</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Michael Brown</TableCell>
            <TableCell>42</TableCell>
            <TableCell>Chicago</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Sarah Wilson</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Miami</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              End of the Table
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    </>
  )
}
