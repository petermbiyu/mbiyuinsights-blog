import { prisma } from "@/lib/db";
import { sendMail } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await prisma.contacts.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        name: true,
        message: true,
        isRead: true,
        createdAt: true,
      },
    });
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { success: true, message: "failed to load messages" },
        { status: 400 },
      );
    }
    return NextResponse.json({ success: true, messages }, { status: 200 });
  } catch (error) {
    console.error("Retrieve_message_error: ", error);
    return NextResponse.json(
      { success: false, message: "retreiving message error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing details" },
        { status: 400 },
      );
    }

    await prisma.contacts.create({
      data: {
        name,
        email,
        message,
        isRead: false,
      },
    });

    const sender = {
      name: "MbiyuInsights",
      address: "petersmasha@gmail.com",
    };
    const recipients = [
      {
        name: name,
        address: email,
      },
    ];
    const mail = await sendMail({
      sender,
      recipients,
      subject: "Contact Message",
      message:
        "Thank you for contacting us. Kindly note that it takes upto 24h for us to get back to you",
    });
    if (!mail || (mail.rejected && mail.rejected.length > 0)) {
      return NextResponse.json({
        success: false,
        message: "Message saved but email not sent",
      });
    }
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("SERVER_ERROR_LOG:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send message at this time" },
      { status: 500 },
    );
  }
}
