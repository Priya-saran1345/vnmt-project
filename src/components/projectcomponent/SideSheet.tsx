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
              className="fixed uppercase cursor-pointer z-[99] bg-gradient-to-r rounded-b-xl from-lightblue to-darkblue
               rotate-90 px-10 py-2 text-[20px] text-white 
              -right-28 bottom-[40%] flex items-center gap-3 transition-opacity duration-300"
            >
              Have A Query ? <IoMdMenu />

            </div>
          </SheetTrigger>
        )}

        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">{/* Your content goes here */}</div>
          <SheetClose asChild>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Close
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default QuerySheet

