import connect2 from "@/dbConfig/dbConfig2";
import { getInquiryModel } from "@/models/InquiryModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const conn = await connect2();
    const InquiryModel = getInquiryModel(conn);
    
    const body = await req.json();
    const { name, email, phone, companyName, servicesInterested, message } =
      body;

    // Check compulsory fields
    if (!name || !email || !phone || !servicesInterested) {
      return NextResponse.json(
        { message: "Name, Email, Phone number, and Services Interested are required." },
        { status: 400 }
      );
    }

    const newInquiry = await InquiryModel.create({
      name,
      email,
      phone,
      companyName,
      servicesInterested: Array.isArray(servicesInterested) 
        ? servicesInterested 
        : [servicesInterested],
      message,
      timestamp: new Date(),
    });

    // Initialize SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    // 1. Admin Notification Mail Details
    const adminMailOptions: SendMailOptions = {
      from: process.env.MY_EMAIL,
      to: "guptaamit60600@gmail.com",
      subject: `New Service Inquiry from ${name} 💼`,
      html: `
        <div style="font-family: sans-serif; color: #1f2937; line-height: 1.5; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1f2937; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold;">New Service Inquiry</h1>
          </div>
          <div style="padding: 24px;">
            <table border="0" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="width: 35%; font-weight: bold; color: #4b5563; padding: 10px 0;">Client Name:</td>
                <td style="color: #1f2937; padding: 10px 0;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="font-weight: bold; color: #4b5563; padding: 10px 0;">Email:</td>
                <td style="color: #1f2937; padding: 10px 0;"><a href="mailto:${email}" style="color: #ea580c; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="font-weight: bold; color: #4b5563; padding: 10px 0;">Phone:</td>
                <td style="color: #1f2937; padding: 10px 0;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="font-weight: bold; color: #4b5563; padding: 10px 0;">Company:</td>
                <td style="color: #1f2937; padding: 10px 0;">${companyName || "N/A"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="font-weight: bold; color: #4b5563; padding: 10px 0;">Services:</td>
                <td style="color: #1f2937; padding: 10px 0;">${servicesInterested}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; color: #4b5563; padding: 10px 0; vertical-align: top;">Message:</td>
                <td style="color: #1f2937; padding: 10px 0; white-space: pre-wrap;">${message || "N/A"}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
            Submitted on ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    // 2. Client Confirmation Mail Details
    const clientMailOptions: SendMailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: `Thank you for contacting Hirebie! 🚀`,
      html: `
        <div style="font-family: sans-serif; color: #1f2937; line-height: 1.5; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <div style="background-color: #ea580c; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.05em;">HIREBIE</h1>
          </div>
          <div style="padding: 32px 24px;">
            <h2 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 600;">Hello ${name},</h2>
            <p style="font-size: 16px; color: #4b5563;">Thank you for reaching out to Hirebie!</p>
            <p style="font-size: 16px; color: #4b5563;">We have received your request regarding the following service(s):</p>
            <div style="background-color: #f9fafb; border-left: 4px solid #ea580c; padding: 12px 16px; margin: 16px 0; font-weight: 500; font-size: 16px; color: #1f2937;">
              ${servicesInterested}
            </div>
            <p style="font-size: 16px; color: #4b5563;">Our team of skilled professionals is already reviewing your requirements. We will get back to you with a detailed quote and discuss the next steps within <strong>2 business days</strong>.</p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 0;">If you have any urgent queries in the meantime, feel free to reply directly to this email or contact us at <a href="mailto:contact@hirebie.com" style="color: #ea580c; text-decoration: none; font-weight: 500;">contact@hirebie.com</a>.</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Hirebie. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send both mails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json(newInquiry);
  } catch (error) {
    console.error("Failed to add inquiry or send email:", error);
    return NextResponse.json(
      { message: "Failed to add inquiry or send email notifications.", error },
      { status: 500 }
    );
  }
}