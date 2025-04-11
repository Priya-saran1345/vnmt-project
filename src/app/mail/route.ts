/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

async function verifyRecaptcha(token: string) {
  const secretKey = ""

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  })

  const data = await response.json()
  console.log("✅ reCAPTCHA response:", data)

  return data
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, query, lookingFor, token } = body

    if (!email || !query || !name || !phone) {
      console.error("❌ Missing required fields")
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }
    if (!token) {
      console.error("❌ reCAPTCHA token missing")
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    const recaptchaResult = await verifyRecaptcha(token)

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error("❌ reCAPTCHA failed. Score:", recaptchaResult.score)
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing SMTP credentials")
      return NextResponse.json({ error: "SMTP credentials are missing" }, { status: 500 })
    }

    // Improved email configuration to avoid spam filters
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: false, // Set to false in production
      logger: false, // Set to false in production
    })

    const mailOptions = {
      from: {
        name: "VNMT Website Contact",
        address: process.env.EMAIL_USER,
      },
      to: "abhishek.sharma1@digranknow.com",
      subject: "New Inquiry from VNMT Website",
      text: `HOMEPAGE CONTACT FORM DETAILS: \n 
      Username: ${name}
      Mobile number: ${phone}
      Email: ${email}
      Message: ${query}
      Looking For: ${lookingFor ? (Array.isArray(lookingFor) ? lookingFor.join(", ") : lookingFor) : "Not specified"}
      `,
      // Adding HTML version improves deliverability
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Looking For:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${lookingFor ? (Array.isArray(lookingFor) ? lookingFor.join(", ") : lookingFor) : "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${query}</td>
            </tr>
          </table>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This message was sent from the VNMT Solutions website contact form.</p>
        </div>
      `,
      headers: {
        "X-Priority": "1", // High priority
        "X-MSMail-Priority": "High",
        Importance: "High",
        "X-Mailer": "VNMT Website Mailer",
      },
    }

    try {
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
    } catch (mailError: any) {
      console.error("❌ Email sending failed:", mailError)
      return NextResponse.json({ error: "Failed to send email", details: mailError.message }, { status: 500 })
    }
  } catch (error: any) {
    console.error("❌ Unexpected error:", error)
    return NextResponse.json({ error: "Failed to send message", details: error.message }, { status: 500 })
  }
}
