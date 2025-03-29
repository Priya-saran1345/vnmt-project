/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { subscribeToNewsletter } from "@/app/subscribeToNewsletter"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"
import { FiSend } from "react-icons/fi"

export default function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

        try {
            const result = await subscribeToNewsletter(email)
            if (result.success) {
                setStatus("success")
                setMessage("You've subscribed to our newsletter!")
                setEmail("")
            } else {
                setStatus("error")
                setMessage(result.message || "Failed to subscribe. Please try again.")
            }
        } catch (error: any) {
            setStatus("error")
            setMessage("An unexpected error occurred. Please try again.")
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">


            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-row gap-2 bg-white rounded-full px-3 max-w-60 ">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-grow w-full text-black outline-none rounded-full  pl-2 pr-10  py-[6px] "
                        disabled={status === "loading" || status === "success"}
                    />
                    <button type="submit" disabled={status === "loading" || status === "success"} className="whitespace-nowrap smooth1 text-black">
                        {status === "loading" ? "Subscribing..." : <FiSend/>}
                    </button>
                </div>

                {status === "success" && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-2 rounded max-w-60">
                        <CheckCircle className="h-4 " />
                        <span className="text-sm">{message}</span>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-2 rounded max-w-60">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">{message}</span>
                    </div>
                )}
            </form>
        </div>
    )
}

