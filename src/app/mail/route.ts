/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

async function verifyRecaptcha(token: string) {
  const secretKey = "6LddUQMrAAAAAPJR5nuFNPrA87q1W1BlA27SrbUB";

  // console.log("🔍 Verifying reCAPTCHA...");

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  // console.log("✅ reCAPTCHA response:", data);

  return data;
}

export async function POST(req: Request) {
  try {
    // console.log("📩 Incoming request...");

    const body = await req.json();
    // console.log("📝 Parsed request body:", body);

    const { name, email, phone, query, lookingFor, token } = body;

    // Validate required fields
    if (!email || !query || !name || !phone) {
      console.error("❌ Missing required fields");
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // console.log("✅ Required fields are present.");

    // Verify reCAPTCHA token
    if (!token) {
      console.error("❌ reCAPTCHA token missing");
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
    }

    const recaptchaResult = await verifyRecaptcha(token);

    // Check if reCAPTCHA verification was successful
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error("❌ reCAPTCHA failed. Score:", recaptchaResult.score);
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    // console.log("✅ reCAPTCHA verification successful with score:", recaptchaResult.score);

    // Check environment variables for SMTP credentials
    // console.log("🔍 Checking SMTP credentials...");
    // console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
    // console.log("🔒 EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Not Set");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing SMTP credentials");
      return NextResponse.json({ error: "SMTP credentials are missing" }, { status: 500 });
    }

    // Create email transporter
    // console.log("📨 Setting up email transporter...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enables debugging
      logger: true, // Logs everything
    });

    // console.log("✅ Email transporter created successfully.");

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "abhishek.sharma1@digranknow.com",
      subject: "Message from VNMT Website",
      text: `HOMEPAGE CONTACT FORM DETAILS: \n 
      Username: ${name}
      Mobile number: ${phone}
      Email: ${email}
      Message: ${query}
      Looking For: ${lookingFor ? lookingFor.join(", ") : "Not specified"}
      reCAPTCHA score: ${recaptchaResult.score}
      `,
    };

    // console.log("✉️ Sending email with options:", mailOptions);

    try {
      await transporter.sendMail(mailOptions);
      // console.log("✅ Email sent successfully.");
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (mailError:any) {
      console.error("❌ Email sending failed:", mailError);
      return NextResponse.json({ error: "Failed to send email", details: mailError.message }, { status: 500 });
    }
  } catch (error:any) {
    console.error("❌ Unexpected error:", error);
    return NextResponse.json({ error: "Failed to send message", details: error.message }, { status: 500 });
  }
}
