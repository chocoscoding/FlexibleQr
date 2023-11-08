"use client";
import { Session } from "next-auth";
import React, { ReactNode, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import toast from "react-hot-toast";

const RootProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  //to avoid hydration mismatch and clear all toasts on full page rerender
  const [mounted, setMounted] = React.useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    toast.dismiss();
  }, []);

  if (!mounted) return null;
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
};

export default RootProvider;
