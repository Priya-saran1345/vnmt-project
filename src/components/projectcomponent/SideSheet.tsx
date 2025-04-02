/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useEffect, useState } from "react"
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
import { message } from "antd"
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons"

declare global {
  interface Window {
    grecaptcha: {
      ready?: (callback: () => void) => void
      execute?: (siteKey: string, options: { action: string }) => Promise<string>
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
      render: (container: string | HTMLElement, parameters: object) => number
    }
    onRecaptchaSuccess?: () => void
  }
}

const validateInput = (name: string, value: string) => {
  switch (name) {
    case "name":
      return value.trim().length > 1 ? "" : "Name must be at least 1 characters long."
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format."
    case "phone":
      return /^[0-9]{10,15}$/.test(value) ? "" : "Phone number must be 10-15 digits."
    case "query":
      return value.trim().length > 1 ? "" : "Query must be at least 1 characters long."
    default:
      return ""
  }
}

const fieldLabels = {
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  query: "Your Query",
}

const QuerySheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    lookingFor: [] as string[],
    query: "",
    errors: {} as Record<string, string>,
  })
  const [messageApi, contextHolder] = message.useMessage()

  // const siteKey = "6LfLTAcrAAAAAPO3Mi9us6VmTclabJOn2HQFAQZi";
  useEffect(() => {
    // Load reCAPTCHA v2 script
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      document.head
        .querySelectorAll(`script[src="https://www.google.com/recaptcha/api.js"]`)
        .forEach((el) => el.remove())
    }
  }, [])

  // Options for the "Looking for" checkboxes with icons
  const lookingForOptions = [
    { value: "netsuiteConsulting", label: "NetSuite Consulting" },
    { value: "netsuiteImplementation", label: "NetSuite Implementation " },
    { value: "netSuiteIntegration", label: "NetSuite Integration" },
    { value: "celigoServices", label: "Celigo Services" },
    { value: "support and maintenance", label: "NetSuite Support & Maintenance" },
    { value: "careers", label: "Careers" },
    { value: "not sure", label: "Not Sure" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateInput(name, value)
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: error },
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev: any) => {
      const updatedLookingFor = checked
        ? [...prev.lookingFor, value]
        : prev.lookingFor.filter((item: any) => item !== value)
      return { ...prev, lookingFor: updatedLookingFor }
    })
  }

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched for validation
    const allTouched = Object.keys(fieldLabels).reduce(
      (acc, field) => {
        acc[field] = true
        return acc
      },
      {} as Record<string, boolean>,
    )
    setTouched(allTouched)

    // Validate all fields
    const { name, email, phone, query } = formData
    const errors = {
      name: validateInput("name", name),
      email: validateInput("email", email),
      phone: validateInput("phone", phone),
      query: validateInput("query", query),
    }

    if (Object.values(errors).some((error) => error !== "")) {
      setFormData((prev: any) => ({ ...prev, errors }))
      return
    }

    // Get reCAPTCHA response
    const recaptchaResponse = window.grecaptcha?.getResponse()

    if (!recaptchaResponse) {
      messageApi.error({
        type: "error",
        content: "Please complete the reCAPTCHA verification.",
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          lookingFor: formData.lookingFor,
          query,
          token: recaptchaResponse,
        }),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      const result = await response.json()
      if (result.message) {
        messageApi.success({
          type: "success",
          content: "Message submitted successfully!",
          style: {
            marginTop: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          lookingFor: [],
          query: "",
          errors: {},
        })
        setTouched({})
        // Reset reCAPTCHA
        window.grecaptcha?.reset()
        setTimeout(() => setIsOpen(false), 1500)
      } else {
        messageApi.error({
          type: "error",
          content: "Failed to send query",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      messageApi.error({
        type: "error",
        content: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  // Get input status for styling
  const getInputStatus = (field: string) => {
    if (!touched[field]) return "default"
    return formData.errors[field] ? "error" : "success"
  }

  // Get input class based on validation status
  const getInputClass = (field: string) => {
    const status = getInputStatus(field)
    const baseClass = "w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200 text-gray-800"

    if (status === "error") {
      return `${baseClass} border-textred   bg-red-50`
    } else if (status === "success" && touched[field]) {
      return `${baseClass} border-lightblue   bg-blue-50`
    }
    return `${baseClass} border-gray-300   hover:border-lightblue`
  }

  return (
    <>
      {" "}
      {contextHolder}
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {!isOpen && (
            <SheetTrigger asChild>
              <div className="fixed uppercase cursor-pointer z-[99] rounded-b-xl bg-darkblue rotate-90 px-5 py-2 text-[15px] text-white font-bold -right-[4.9rem] bottom-[40%] flex items-center gap-3 transition-opacity duration-300 hover:scale-105">
                {" "}
                Have A Query? <IoMdMenu />{" "}
              </div>
            </SheetTrigger>
          )}

          <SheetContent className="bg-white p-6 rounded-l-xl shadow-xl overflow-y-auto max-w-sm w-full h-screen">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-xl font-semibold text-darkblue">
                <span className="relative inline-block">
                  Hello!
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange"></span>
                </span>
              </SheetTitle>
              <SheetDescription className="text-sm  mt-1">
                Fill out the form below and we&apos;ll get back to you soon.
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={onSubmitForm} className="space-y-3 ">
              {Object.entries(fieldLabels).map(([field, label]) => (
                <div key={field} className="relative">
                  <label
                    htmlFor={field}
                    className="absolute left-3 top-2 text-xs  transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs "
                  >
                    {label} {field !== "lookingFor" && <span className="text-textred">*</span>}
                  </label>
                  {field === "query" ? (
                    <textarea
                      id={field}
                      name={field}
                      placeholder=" "
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClass(field)} peer pt-5 pb-2 h-20 resize-none`}
                      required
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder=" "
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClass(field)} peer pt-5 pb-2`}
                      required
                    />
                  )}
                  {formData?.errors[field] && (
                    <div className="text-xs text-red-500 mt-1">{formData?.errors[field]}</div>
                  )}
                  {touched[field] && !formData.errors[field] && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightblue">
                      <CheckOutlined />
                    </div>
                  )}
                </div>
              ))}

              <div className="space-y-2">
                <label className="text-sm font-medium text-darkblue">What are you looking for?</label>
                <div className="flex flex-wrap gap-2">
                  {lookingForOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-2 rounded-md border transition-all duration-200 text-sm 
                ${formData.lookingFor.includes(option.value) ? "border-orange bg-orange bg-opacity-10 text-darkblue" : "border-gray-300 hover:border-lightorange hover:bg-orange hover:bg-opacity-5"}`}
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.lookingFor.includes(option.value)}
                        onChange={handleCheckboxChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-3.5 h-3.5 mr-1 flex items-center justify-center rounded border ${formData.lookingFor.includes(option.value) ? "bg-orange border-orange" : "border-gray-400"}`}
                      >
                        {formData.lookingFor.includes(option.value) && <CheckOutlined className="text-white text-xs" />}
                      </div>
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-3 mb-3">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfLTAcrAAAAAPO3Mi9us6VmTclabJOn2HQFAQZi"
                  data-callback="onRecaptchaSuccess"
                ></div>
              </div>

              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className={`w-full py-2.5 rounded-md text-sm font-medium transition-all duration-300 
            ${loading ? "bg-darkblue opacity-70 cursor-not-allowed" : "bg-darkblue hover:shadow-lg hover:translate-y-[-1px]"} 
            text-white`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <LoadingOutlined className="mr-2" /> Submitting...
                    </span>
                  ) : (
                    "Submit Query"
                  )}
                </button>

                <SheetClose asChild>
                  <button
                    type="button"
                    className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-md hover:bg-gray-200 transition-all duration-200 text-sm font-medium"
                  >
                    Close
                  </button>
                </SheetClose>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500 text-center">
                Your information is secure and will only be used to contact you regarding your query.
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default QuerySheet

