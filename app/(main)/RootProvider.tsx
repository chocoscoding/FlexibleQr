"use client";
import { Session } from "next-auth";
import { ReactNode, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import StartModal from "../components/StartModal";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const RootProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  //to avoid hydration mismatch and clear all toasts on full page rerender
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    toast.dismiss();
  }, []);

  if (!mounted) return null;
  return (
    <div className="bg-main-light min-h-screen text-main-dark">
      <div className="w-full max-w-[1500px] m-auto">
        <SessionProvider session={session}>
          <Toaster
            toastOptions={{
              className: "border border-main-dark bg-white text-main-dark !shadow-3xl !rounded",
            }}
          />
          <Navbar />
          <StartModal />
          {children}
          <Footer />
          <SpeedInsights/>
      <Analytics/>
        </SessionProvider>
      </div>
    </div>
  );
};

export default RootProvider;
