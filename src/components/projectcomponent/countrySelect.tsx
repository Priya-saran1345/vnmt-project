"use client"

import { FaChevronDown } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const defaultCountry = {
  name: "India",
  flag: "https://flagcdn.com/w320/in.png",
  ext: "in",
}

const countries = [
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png", ext: "au" },
  { name: "USA", flag: "https://flagcdn.com/w320/us.png", ext: "usa" },
]

const CountrySelector = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  const router = useRouter()
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedCountry")
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return defaultCountry // Default to India
  })

  useEffect(() => {
    localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry))
  }, [selectedCountry])

  const handleSelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country)
    setIsOpen(false)
    router.push(`/${country.ext}`)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)}>
      <button className="flex items-center gap-2 hover:text-orange text-white cursor-pointer py-2">
        <Image src={selectedCountry.flag || "/placeholder.svg"} alt={selectedCountry.name} height={20} width={20} />
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <FaChevronDown />
        </motion.span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-[999] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {countries.map((country) => (
          <div
            key={country.name}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
            onClick={() => handleSelect(country)}
          >
            <Image src={country.flag || "/placeholder.svg"} alt={country.name} height={20} width={20} />
            <span>{country.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default CountrySelector

