/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  })

  const data = await response.json()
  return data
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, query, lookingFor, token } = body

    // Validate required fields
    if (!email || !query || !name || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Verify reCAPTCHA token
    if (!token) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    const recaptchaResult = await verifyRecaptcha(token)

    // Check if reCAPTCHA verification was successful
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed. Please try again.",
        },
        { status: 400 },
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "abhishek.sharma1@digranknow.com",
      subject: "Message from VNMT Website",
      text: `HOMEPAGE CONTACT FORM DETAILS: \n this message is sent by
      
      Username: ${name}
      Mobile number: ${phone}
      Email: ${email}
      Message: ${query}
      Looking For: ${lookingFor ? lookingFor.join(", ") : "Not specified"}
      reCAPTCHA score: ${recaptchaResult.score}
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

