"use client"

import React, { useState } from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io"

const QuerySheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {!isOpen && (
          <SheetTrigger asChild>
            <div
              className="fixed uppercase cursor-pointer z-[99] rounded-b-xl bg-darkblue
               rotate-90 px-5 py-2 text-[15px] text-white font-bold 
              -right-[4.9rem] bottom-[40%] flex items-center gap-3 transition-opacity duration-300 hover:scale-105 smooth1 "
            >
              Have A Query ? <IoMdMenu />

            </div>
          </SheetTrigger>
        )}

        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>Hello User!</SheetTitle>
            <SheetDescription>Some Good Stuff Here.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">{/* Your content goes here */}</div>
          <SheetClose asChild>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Close
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default QuerySheet

