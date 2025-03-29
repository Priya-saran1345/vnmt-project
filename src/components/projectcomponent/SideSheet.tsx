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
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LddUQMrAAAAAJA8P1JthBlKkvlXVsvGMDywOz72`;
    script.async = true;
    script.onload = () => {
      // console.log("reCAPTCHA script loaded successfully");
    };
    script.onerror = () => {
      message.error("Failed to load reCAPTCHA script. Please refresh the page.");
    };
    document.body.appendChild(script);
  }, []);

  
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
      const updatedLookingFor = checked ? [...prev.lookingFor, value] : prev.lookingFor.filter((item: any) => item !== value)
      return { ...prev, lookingFor: updatedLookingFor }
    })
  }

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()    
    if (!window.grecaptcha) {
      message.error("reCAPTCHA failed to load. Please refresh the page.");
      return;
    }
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

    setLoading(true)
    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA is not loaded. Please refresh the page.")
      }

      // Wait for grecaptcha to be ready
      await new Promise<void>((resolve) => {
        if (window.grecaptcha.ready) {
          window.grecaptcha.ready(resolve)
        } else {
          resolve()
        }
      })
      const token = await window.grecaptcha.execute(`6LddUQMrAAAAAJA8P1JthBlKkvlXVsvGMDywOz72`, { action: "submit" });
      const response = await fetch("/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          lookingFor: formData.lookingFor,
          query,
          token
        }),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      const result = await response.json()
      if (result.message) {
        messageApi.success({
          type: 'success',
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
        setTimeout(() => setIsOpen(false), 1500)
      } else {
        messageApi.error({
          type: 'error',
          content: 'Failed to send query',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      messageApi.error({
        type: 'error',
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
    <>      {contextHolder}
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {!isOpen && (
          <SheetTrigger asChild>
            <div className="fixed uppercase cursor-pointer z-[99] rounded-b-xl bg-darkblue rotate-90 px-5 py-2 text-[15px] text-white font-bold -right-[4.9rem] bottom-[40%] flex items-center gap-3 transition-opacity duration-300 hover:scale-105"> Have A Query? <IoMdMenu /> </div>
          </SheetTrigger>
        )}

        <SheetContent className="bg-white p-8 rounded-l-2xl shadow-2xl  overflow-y-auto max-w-md w-full">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-bold text-darkblue">
              <span className="relative inline-block">
                Hello!
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange"></span>
              </span>
            </SheetTitle>
            <SheetDescription className="text-black mt-2">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </SheetDescription>
          </SheetHeader>

          <form onSubmit={onSubmitForm} className="space-y-4 ">
            {Object.entries(fieldLabels).map(([field, label]) => (


              <div key={field} className="space-y-1">
                <label htmlFor={field} className="text-base font-medium text-darkblue">
                  {label} {field !== "lookingFor" && <span className="text-textred">*</span>}
                </label>

                <div className="relative">
                  {field === "query" ? (
                    <textarea
                      id={field}
                      name={field}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClass(field)} min-h-[100px] resize-none`}
                      required
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass(field)}
                      required
                    />
                  )}
                  {touched[field] && !formData.errors[field] && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightblue">
                      <CheckOutlined />
                    </div>
                  )}
                </div>

              </div>
            ))}

            <div className="space-y-2">
              <label className="text-base font-medium text-darkblue">What are you looking for?</label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {lookingForOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`
                      flex items-center p-3 rounded-lg border transition-all duration-200
                      ${formData.lookingFor.includes(option.value)
                        ? "border-orange bg-orange bg-opacity-10 text-darkblue"
                        : "border-gray-200 hover:border-lightorange hover:bg-orange hover:bg-opacity-5"
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.lookingFor.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 mr-2 flex items-center justify-center rounded border ${formData.lookingFor.includes(option.value) ? "bg-orange border-orange" : "border-gray-400"
                        }`}
                    >
                      {formData.lookingFor.includes(option.value) && <CheckOutlined className="text-white text-xs" />}
                    </div>
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className={`
                  w-full py-3 rounded-lg font-medium transition-all duration-300 
                  ${loading
                    ? "bg-darkblue opacity-70 cursor-not-allowed"
                    : "bg-darkblue hover:shadow-lg hover:translate-y-[-2px]"
                  } 
                  text-white
                `}
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
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium"
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

