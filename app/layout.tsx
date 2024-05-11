import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

const inter = Manrope({ subsets: ["latin"] });

const metainfo = {
  name: "Flexible QR",
  description: "Create a QR code once and change its link or function anytime",
  url: "https://flexibleqrcodes.vercel.app/",
  image: "/meta.png",
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6630162015653294"
      />
    </html>
  );
}
