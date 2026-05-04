import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json(
    {
      message:
        "The audit form now submits directly to Web3Forms from src/components/ContactForm.tsx."
    },
    { status: 410 }
  );
}
