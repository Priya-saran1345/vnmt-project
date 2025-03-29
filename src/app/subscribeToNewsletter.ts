"use server"

import { revalidatePath } from "next/cache"

type BrevoResponse = {
  success: boolean
  message?: string
}

export async function subscribeToNewsletter(email: string): Promise<BrevoResponse> {
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address",
    }
  }

  try {
    // Get the Brevo API key from environment variables
    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      console.error("BREVO_API_KEY is not defined in environment variables")
      return {
        success: false,
        message: "Server configuration error. Please contact the administrator.",
      }
    }

    // Make a request to Brevo API to add the contact
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [2], 
        updateEnabled: true,
      }),
    })

    // Handle the response
    if (response.status === 201 || response.status === 204) {
      // Successfully created or contact already exists
      revalidatePath("/") // Revalidate the page that contains the form
      return { success: true }
    }

    const data = await response.json()
    console.error("Brevo API error:", data)

    // Handle specific error cases
    if (response.status === 400) {
      return {
        success: false,
        message: "Invalid request. Please try again with a valid email.",
      }
    }

    return {
      success: false,
      message: data.message || "Failed to subscribe. Please try again.",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

