"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_: unknown, formData: FormData) {
  const password = formData.get("password") as string;
  const expected = process.env.APP_PASSWORD ?? "saveplus";

  if (password !== expected) {
    return { error: "Incorrect password" };
  }

  const cookieStore = await cookies();
  cookieStore.set("session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  redirect("/feed");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/login");
}
