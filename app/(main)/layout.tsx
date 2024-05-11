import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import RootProvider from "./RootProvider";
import NextTopLoader from "nextjs-toploader";
const inter = Manrope({ subsets: ["latin"] });

const metainfo = {
  name: "Flexible QR",
  description: "Create a QR code once and change its link or function anytime",
  url: "https://flexibleqrcodes.vercel.app/",
  image: "/meta/meta.png",
  favicon: "/favicon.ico",
};

export const metadata: Metadata = {
  icons: metainfo.favicon,
  metadataBase: new URL(metainfo.url),
  title: metainfo.name,
  description: metainfo.description,
  authors: {
    name: metainfo.name,
    url: metainfo.url,
  },
  creator: metainfo.name,
  openGraph: {
    type: "website",
    url: metainfo.url,
    title: metainfo.name,
    description: metainfo.description,
    images: metainfo.image,
  },
  keywords: ["changeable qr code", "dynamic qr code", "dynamic qr", "business", "qr codes", "QR CODES", "qr", "chocoscoding"],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#1F1233" speed={300} shadow="0 0 10px #26173c,0 0 5px #231537" />
        <RootProvider session={session}>{children}</RootProvider>
      </body>
    </html>
  );
}
