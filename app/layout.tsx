import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexible Qr",
  description: "Create a QR code that changes in info but not in look",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script strategy="afterInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6630162015653294" />
    </html>
  );
}
