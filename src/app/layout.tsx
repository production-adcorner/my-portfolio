import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ad-corner-portfolio.vercel.app/"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AD Corner - Branding that you need Indeed",
    template: `%s | AD Corner`,
  },
  description: "Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.",
  keywords: ["branding", "package design", "graphic design", "logo design", "ad corner", "brand identity"],
  authors: [{ name: "Vijay Bhadani" }],
  creator: "Mukund Hirpara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "AD Corner - Branding that you need Indeed",
    description: "Elevate your brand with custom identity and package design.",
    images: 'https://res.cloudinary.com/doq2xoame/image/upload/v1751263467/fevicon_nmffcl.png',
  },
  icons: {
    icon: 'https://res.cloudinary.com/doq2xoame/image/upload/v1751263467/fevicon_nmffcl.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
