import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(new URL("/favicon-jpg.jpg", request.url), 308);
}
