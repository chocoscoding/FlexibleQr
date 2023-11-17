import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import RootProvider from "./RootProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexible QR",
  description: "Create a QR code that changes in info but not in look",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          showSpinner={false}
          color="#1F1233"
          speed={300}
          shadow="0 0 10px #26173c,0 0 5px #231537"
        />
        <RootProvider session={session}>{children}</RootProvider>
      </body>
    </html>
  );
}
