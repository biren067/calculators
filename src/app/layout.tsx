import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Financial & Mathematical Calculators | Free Online Tools",
  description: "Free online calculators for financial planning, investments, and mathematical calculations. Simple interest, compound interest, SIP, EMI, and more.",
  keywords: ["calculator", "financial calculator", "investment calculator", "interest calculator"],
  openGraph: {
    title: "Financial & Mathematical Calculators",
    description: "Complete suite of free online calculators for all your financial needs.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
