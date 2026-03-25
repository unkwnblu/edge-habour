import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://www.edgeharbour.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Edge Harbour — Compliant Recruitment for Healthcare & Hospitality",
    template: "%s | Edge Harbour",
  },
  description:
    "Hire pre-vetted, Right-to-Work verified professionals in 48 hours. Edge Harbour connects UK employers with compliance-ready talent in Healthcare, Hospitality, Customer Service, and Tech.",
  keywords: [
    "compliant recruitment UK",
    "right to work verification",
    "pre-vetted candidates",
    "healthcare recruitment UK",
    "hospitality recruitment",
    "DBS checked staff",
    "UK recruitment platform",
    "frictionless hiring",
  ],
  authors: [{ name: "Edge Harbour Recruitment Company Ltd" }],
  creator: "Edge Harbour",
  publisher: "Edge Harbour Recruitment Company Ltd",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Edge Harbour",
    title: "Edge Harbour — Compliant Recruitment for Healthcare, Hospitality , Customer Service & Tech",
    description:
      "Hire pre-vetted, Right-to-Work verified professionals in 48 hours. Join 500+ UK employers already on our platform.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edge Harbour — The New Standard in Compliant Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Harbour — Compliant Recruitment for Healthcare & Hospitality",
    description:
      "Hire pre-vetted, Right-to-Work verified professionals in 48 hours.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Edge Harbour Recruitment Company Ltd",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/eh-logo.svg`,
        width: 36,
        height: 36,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@edgeharbour.co.uk",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      areaServed: "GB",
      knowsAbout: [
        "Compliant Recruitment",
        "Right-to-Work Verification",
        "Healthcare Staffing",
        "Hospitality Recruitment",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Edge Harbour",
      description:
        "The new standard in compliant recruitment for UK employers.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Edge Harbour — Compliant Recruitment for Healthcare & Hospitality",
      description:
        "Hire pre-vetted, Right-to-Work verified professionals in 48 hours. Join the Edge Harbour waitlist.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
