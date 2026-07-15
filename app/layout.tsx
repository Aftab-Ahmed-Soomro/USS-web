import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "360 Digital Marketing Agency",
  description: "A digital marketing agency landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${beVietnam.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to Google Fonts — starts DNS+TCP before CSS parser sees font URLs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect to video host — hero video is cross-origin, saves ~300ms on DNS */}
        <link rel="preconnect" href="https://unitedstrategicsolutions.com" />
        <link rel="dns-prefetch" href="https://unitedstrategicsolutions.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
