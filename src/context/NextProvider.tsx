'use client';
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface indexProps{
  children: ReactNode;
}

const NextAuthProvider : FC<indexProps> = ({children}) => {

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default NextAuthProvider;