import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  solution?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim()) {
    return NextResponse.json(
      { message: "Name is required." },
      { status: 400 }
    );
  }

  if (!body.email?.trim() || !emailPattern.test(body.email)) {
    return NextResponse.json(
      { message: "A valid email is required." },
      { status: 400 }
    );
  }

  if (!body.message?.trim()) {
    return NextResponse.json(
      { message: "Project summary is required." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Thanks for reaching out. This form is wired to a local API endpoint and is ready to connect to your email or CRM provider.",
  });
}
