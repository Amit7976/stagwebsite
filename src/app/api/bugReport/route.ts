import { NextRequest, NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const formData = await req.formData();

    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") fields[key] = value;
    });

    const file = formData.get("file") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    // ✅ use SendMailOptions instead of any
    const mailOptions: SendMailOptions = {
      from: process.env.MY_EMAIL,
      to: "contact@hirebie.com",
      subject: "New Bug Report 🚨",
      html: `
        <h2>🪲 New Bug Report Received</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; font-family: sans-serif;">
          <tr><th align="left">Field</th><th align="left">Value</th></tr>
          ${Object.entries(fields)
            .map(
              ([key, value]) =>
                `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`
            )
            .join("")}
        </table>
        <p style="margin-top: 20px;">Submitted on <strong>${new Date().toLocaleString()}</strong></p>
      `,
    };

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Bug report error:", err);
    return NextResponse.json({ error: "Bug report failed" }, { status: 500 });
  }
}
