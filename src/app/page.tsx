'use client'
import { redirect } from "next/navigation";

export default function HomePage() {
  if (typeof window !== "undefined") {
    const user = localStorage.clear()
    return user;
  }
  redirect("/auth/login");

}
