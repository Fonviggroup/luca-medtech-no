import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.MAINTENANCE_SECRET;

  if (username === validUsername && password === validPassword && secret) {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("auth-token", secret, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  return NextResponse.redirect(new URL("/login?error=1", request.url));
}
