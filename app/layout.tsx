import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supremeprobuilders.com"),
  title: {
    default:
      "Supreme Pro Builders | Commercial & Residential General Contractor",
    template: "%s | Supreme Pro Builders",
  },
  description:
    "Licensed commercial and residential general contractor for tenant improvements, glazing, drywall, demolition, remodeling, ADUs, and ground-up construction across Northern California.",
  keywords: [
    "general contractor Modesto",
    "commercial general contractor Northern California",
    "commercial construction contractor",
    "commercial tenant improvement contractor",
    "commercial glazing contractor",
    "commercial drywall contractor",
    "commercial demolition contractor",
    "ground up commercial construction",
    "home remodeling contractor",
    "kitchen remodeling",
    "bathroom remodeling",
    "ADU builder",
    "custom home builder",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Supreme Pro Builders | Build It Once. Build It Right.",
    description:
      "Commercial and residential construction—from tenant improvements and remodeling to complete ground-up builds across Northern California.",
    url: "https://supremeprobuilders.com",
    siteName: "Supreme Pro Builders",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kitchen-hero.webp",
        width: 1919,
        height: 1078,
        alt: "Supreme Pro Builders completed kitchen remodel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Pro Builders",
    description:
      "Commercial and residential general contracting across Northern California.",
    images: ["/images/kitchen-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "codex-preview": "development",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151512",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Supreme Pro Builders",
              url: "https://supremeprobuilders.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
