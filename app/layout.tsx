import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orienttechusa.com";

export const viewport: Viewport = {
  themeColor: "#f24e1e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orient Tech | Automotive Spare Parts & Aftermarket Solutions",
    template: "%s | Orient Tech USA",
  },
  description:
    "Orient Tech, SA de CV & Orient Tech USA, Inc. — Premier international supplier of automotive spare parts, commercial fleet components, and integrated supply chain logistics expanding into North America.",
  keywords: [
    "automotive spare parts",
    "aftermarket auto parts",
    "commercial vehicle components",
    "fleet maintenance parts",
    "Orient Tech",
    "Orient Tech USA",
    "Orient Tech SA de CV",
    "Dallas automotive distributor",
    "Texas auto parts logistics",
    "OEM replacement parts wholesale",
    "automotive supply chain solutions",
    "heavy-duty vehicle parts",
    "automotive warehouse Dallas",
    "Roopesh Mohandas",
  ],
  authors: [{ name: "Orient Tech USA, Inc.", url: siteUrl }],
  creator: "Orient Tech",
  publisher: "Orient Group of Companies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orient Tech | Automotive Spare Parts & Aftermarket Solutions",
    description:
      "Providing high-quality aftermarket spare parts, commercial fleet components, and integrated supply chain solutions across North America and global markets.",
    url: siteUrl,
    siteName: "Orient Tech USA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orient Tech | Automotive Spare Parts & Aftermarket Solutions",
    description:
      "Providing high-quality aftermarket spare parts, commercial fleet components, and integrated supply chain solutions across North America.",
    creator: "@OrientTechUSA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-white">
        {children}
      </body>
    </html>
  );
}
