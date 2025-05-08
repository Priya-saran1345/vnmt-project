import { headers } from "next/headers"

/**
 * Gets the visitor's country code based on their IP address
 * Works on any hosting platform
 */
export async function getCountryCode(): Promise<string> {
  try {
    // Get client IP from request headers
    const headersList = await headers()

    // Try different headers where the client IP might be found
    const forwardedFor = headersList.get("x-forwarded-for")
    const realIp = headersList.get("x-real-ip")

    // Extract the client IP from the headers
    let clientIP = "0.0.0.0"

    if (forwardedFor) {
      // x-forwarded-for might contain multiple IPs - the first one is the client
      clientIP = forwardedFor.split(",")[0].trim()
    } else if (realIp) {
      clientIP = realIp
    }

    // Call the free IP geolocation API
    const response = await fetch(`https://ipapi.co/${clientIP}/country/`)

    if (response.ok) {
      const countryCode = await response.text()
      // Validate that we got a proper country code (2 letters)
      if (countryCode && /^[A-Z]{2}$/.test(countryCode)) {
        return countryCode
      }
    }

    // Fallback if the API call fails
    return "US"
  } catch (error) {
    console.error("Error detecting country from IP:", error)
    return "US" // Default fallback
  }
}
