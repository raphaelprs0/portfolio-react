import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message Portfolio de ${name}`,
      text: `De: ${name} (${email})\n\nMessage:\n${message}`,
      html: `<p><strong>De:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du mail." }, { status: 500 });
  }
}
