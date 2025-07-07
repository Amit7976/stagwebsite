import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import SmoothScrollProvider from "./SmoothScrollProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hirebie | IT Services & Solutions",
  description:
    "Hirebie is a next-gen IT Services company helping businesses grow through tech, talent, and branding.",
  keywords: [
    "Hirebie",
    "IT company in India",
    "software development services",
    "custom software solutions",
    "web development company",
    "mobile app development",
    "hiring services",
    "tech hiring platform",
    "internship partner for colleges",
    "campus recruitment partner",
    "remote internship opportunities",
    "resume review services",
    "LinkedIn profile optimization",
    "brand promotion services",
    "digital branding agency",
    "job portal for freshers",
    "job assistance platform",
    "startup tech solutions",
    "project outsourcing company",
    "AI-based hiring",
    "full stack development agency",
    "MERN stack developers for hire",
    "affordable tech services",
    "freelance developer hiring",
    "remote team hiring solutions",
    "student skill development platform"
  ],
  alternates: {
    canonical: "https://hirebie.com",
  },
  other: {
    "next-size-adjust": "100%",
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon/android-icon-192x192.png',
    apple: '/favicon/android-icon-192x192.png',
  },
  authors: [{ name: "Hirebie Team", url: "https://hirebie.com" }],
  creator: "Hirebie Team",
  metadataBase: new URL("https://hirebie.com"),
  openGraph: {
    title: "Hirebie | IT Services & Solutions",
    description:
      "Hirebie is a next-gen IT Services company helping businesses grow through tech, talent, and branding.",
    url: "https://hirebie.com",
    siteName: "Hirebie",
    images: [
      {
        url: "https://hirebie.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hirebie — IT Services & Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirebie | IT Services & Solutions",
    description:
      "Hirebie is a next-gen IT Services company helping businesses grow through tech, talent, and branding.",
    images: ["https://hirebie.com/opengraph-image.png"],
  },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const viewport: Viewport = {
  themeColor: '#0A0A0A, #ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const updatedTime = "2025-07-07T10:00:00+05:30";

//////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/android-icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon/android-icon-192x192.png" />
        <meta property="og:updated_time" content={updatedTime} />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Hirebie",
              "url": "https://hirebie.com",
              "description":
                "Hirebie is a next-gen IT Services company helping businesses grow through tech, talent, and branding.",
              "applicationCategory": "EducationApplication",
              "operatingSystem": "All",
              "inLanguage": "en",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "INR"
              },
              "creator": {
                "@type": "Organization",
                "name": "Hirebie"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
