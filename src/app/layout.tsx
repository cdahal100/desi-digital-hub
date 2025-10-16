import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Desi Digital Hub - Connecting Cultures Digitally",
  description: "A comprehensive SaaS platform for Nepali and Bhutanese businesses, combining modern digital tools with cultural preservation and community connection.",
  keywords: "nepali business, bhutanese business, saas platform, digital marketing, cultural events, religious services",
  authors: [{ name: "Desi Digital Hub Team" }],
  creator: "Desi Digital Hub",
  publisher: "Desi Digital Hub",
  icons: {
    icon: "/logo-icon-enhanced.svg",
    shortcut: "/logo-icon-enhanced.svg",
    apple: "/logo-icon-enhanced.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://desidigitalhub.com",
    title: "Desi Digital Hub - Connecting Cultures Digitally",
    description: "A comprehensive SaaS platform for Nepali and Bhutanese businesses",
    siteName: "Desi Digital Hub",
    images: [
      {
        url: "/logo-enhanced.svg",
        width: 240,
        height: 60,
        alt: "Desi Digital Hub Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desi Digital Hub - Connecting Cultures Digitally",
    description: "A comprehensive SaaS platform for Nepali and Bhutanese businesses",
    images: ["/logo-enhanced.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} font-sans h-full antialiased bg-slate-50`}>
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
