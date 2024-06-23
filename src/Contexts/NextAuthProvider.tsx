import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

export default async function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return {children}
