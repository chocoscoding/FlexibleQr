"use client";
import { Session } from "next-auth";
import { ReactNode, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import toast from "react-hot-toast";

const RootProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  //to avoid hydration mismatch and clear all toasts on full page rerender
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    toast.dismiss();
  }, []);

  if (!mounted) return null;
  return (
    <div className="bg-main-light min-h-screen">
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default RootProvider;
